var CreatePhotoView = Backbone.View.extend({
	events: {
		'click #add-model': 'addSlide',
		'click #preview': 'preview',
		'click #addBold': 'addBold',
		'click #addCursive': 'addCursive',
		'click #addUnderline': 'addUnderline'
	},
	initialize: function(){
		this.render();
	},
	render: function(){
		this.collection.each(function(photo){
			var cPhotoView = new CPhotoView({model:photo});
			this.$el.append(cPhotoView.render().el);
		}, this);
		return this;
	},

	addBold: function(){
		document.execCommand('bold',false,null);		
	},
	addCursive: function(){
		document.execCommand('italic',false,null);
	},
	addUnderline: function(){
		document.execCommand('underline',false,null);
	},
	addSlide: function(){
		var newTitle = $('#title').val();
		var newDescription = $('#description').html();
		console.log(newDescription);
		var newImage = $('#image').val();
		this.collection.add({
			title: newTitle,
			description: newDescription,
			imgSrc: newImage 
		});
		// console.log(this.collection);
	},
	preview: function(){
		if(!$('#title').val()){
			$('#title').addClass('animation-validation');
			$('.fa-exclamation-triangle').css('display', 'inline');
			setTimeout(function(){
				$('#title').removeClass('animation-validation');
				// $('.fa-exclamation-triangle').css('display', 'none');
			},1000);
		}
		else {
			this.$el.css('display', 'none');
			photosView.render();
			photosView.$el.css('display', 'block');
		}
	}
});