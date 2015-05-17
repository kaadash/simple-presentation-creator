var CPhotoView = Backbone.View.extend({
	className: 'create-input',
	template: _.template($('#create').html()),
	initialize: function() {
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});