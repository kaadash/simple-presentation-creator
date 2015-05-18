var PhotosView = Backbone.View.extend({

	events: {
		'click .arrowLeft': 'previousModel',
		'click .arrowRight': 'nextModel',
		'click #create-mode': 'backToCreate',
		'keydown .arrow-nav': 'nextModelKey'
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
		console.log(this.collection);
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
		

		console.log(position);
	},
	backToCreate: function(){
		this.$el.css('display', 'none');
		createPhotoView.$el.css('display', 'block');
	}
});