var CPhotoView = Backbone.View.extend({
	className: 'create-input',
	template: _.template($('#create').html()),
	events: {
		'keydown #title': 'deleteWarn'
	},
	initialize: function() {
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	deleteWarn: function(e){
		$('.icon-warning-sign').css('display', 'none');
	}
});