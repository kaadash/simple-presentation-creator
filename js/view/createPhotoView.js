var CreatePhotoView = Backbone.View.extend({
	events: {
		'click #add-model': 'test',
		'click #preview': 'preview'
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
	test: function(){
		var newTitle = $('#title').val();
		var newDescription = $('#description').val();
		console.log(newDescription);
		var newImage = $('#image').val();
		this.collection.add({
			title: newTitle,
			description: newDescription,
			imgSrc: newImage 
		});
		console.log(this.collection);
	},
	preview: function(){
		this.$el.css('display', 'none');
		photosView.render();
		photosView.$el.css('display', 'block');
	}
});