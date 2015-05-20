var PhotosView = Backbone.View.extend({

	events: {
		'click .arrowLeft': 'previousModel',
		'click .arrowRight': 'nextModel',
		'click #create-mode': 'backToCreate',
		'keydown .arrow-nav': 'nextModelKey',
		'click #edit': 'fastEdit',
		'click #fullEdit': 'fullEdit',
		'click #save': 'saveEdition'
	},
	initialize: function() {
		this.collection.on('change', this.render, this);
		// this.render();
	},
	render: function(){
		// console.log(this.collection.length);
		
		var length = this.collection.length - 1;
		var lastImg = this.collection.at(length).get('imgSrc');
		var lastTitle = this.collection.at(length).get('title');
		var lastPar = this.collection.at(length).get('description');
		this.collection.remove(this.collection.at(length));
		this.collection.add(createPhotos.models);
		this.collection.add({
			title: lastTitle,
			description: lastPar,
			imgSrc: lastImg
		});
		// console.log(this.collection);
		var whichPhoto = this.collection.at(0);
		this.renderModel(whichPhoto);
		$('.arrow-nav').focus();
		return this;
	},
	renderModel: function(concretePhoto){
		var concretePhotoView = new PhotoView({model: concretePhoto});
		this.$el.html(concretePhotoView.render().el);
	},
	nextModelKey: function(e){
		if (e.keyCode === 39) {
			this.nextModel();
		}
		else if(e.keyCode === 37) {
			this.previousModel();
		}
	},
	nextModel: function(){
		var length = this.collection.length - 2;
		if(window.position < length){
			window.position++;
			var position = window.position;
			var positionImg = this.collection.at(position).get('imgSrc');
			var positionTitle = this.collection.at(position).get('title');
			var positionPar = this.collection.at(position).get('description');
			this.collection.at(0).set({title: positionTitle, imgSrc: positionImg, description: positionPar, show: true});
		}
		console.log(position);
	},
	previousModel: function(){
		var length = this.collection.length - 1;
		if(window.position > 0){
			window.position--;
			var position = window.position;
			if(window.position !== 0){
				var positionImg = this.collection.at(position).get('imgSrc');
				var positionTitle = this.collection.at(position).get('title');
				var positionPar = this.collection.at(position).get('description');
			}
			else {
				var positionImg = this.collection.at(length).get('imgSrc');
				var positionTitle = this.collection.at(length).get('title');
				var positionPar = this.collection.at(length).get('description');
			}
		this.collection.at(0).set({title: positionTitle, imgSrc: positionImg, description: positionPar, show: true});
		}
		

		// console.log(position);
	},
	clearInput: function(){
		$('#title').val('');
		$('#description').html('');
		$('#image').val('');
	},
	backToCreate: function(){
		this.$el.css('display', 'none');
		createPhotoView.$el.css('display', 'block');
		this.clearInput();
	},
	fastEdit: function(){
		this.settingEditable(true);
	},
	fullEdit: function(){
		var modelToChange = this.collection.at(window.position);
		var descriptToChange = modelToChange.get('description');
		var imageToChange = modelToChange.get('imgSrc');
		this.settingEditable(true);	
		createPhotoView.$el.css('display', 'block');
		this.showCreateMode(false);
		$('.preview-nav').css('display', 'none');
		$('#preview-description').css('display', 'none');
		$('#full-save').css('display', 'inline-block');
		console.log(descriptToChange);
		$('#description').html(descriptToChange);
		$('#image').val(imageToChange);
	},
	showCreateMode: function(show){
		var hide = '';
		if(show){
			hide = 'inline-block'
		}
		else {
			hide = 'none';
		}
		$('#title').css('display', hide);
		$('#add-model').css('display', hide);
		$('#preview').css('display', hide);
	},
	settingEditable: function(bool){
		$('#preview-title').attr('contentEditable', bool);
		$('#preview-description').attr('contentEditable', bool);
		$('#save').css('display', 'inline');	
		$('#preview-title').focus();		
	},
	saveEdition: function(){
	
			var modelToEdit = this.collection.at(window.position);
			var setTitle = $('#preview-title').html();	
			var setDescription = $('#preview-description').html();	
			modelToEdit.set({title: setTitle, description: setDescription});
			this.collection.at(0).set({title: setTitle, description: setDescription});
		if(window.position === 0){
			var length = this.collection.length - 1;
			this.collection.at(length).set({title: setTitle, description: setDescription});
		}
	}
});