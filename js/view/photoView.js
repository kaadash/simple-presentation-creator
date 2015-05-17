var PhotoView = Backbone.View.extend({
	className: 'photos',
	template: _.template($('#photo-template').html()),
	initialize: function(){
		this.render();
	},
	render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.fadeIn(1000);		
		return this;
	}
});