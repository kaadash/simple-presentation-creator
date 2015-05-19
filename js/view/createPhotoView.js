var CreatePhotoView = Backbone.View.extend({
	events: {
		'click #add-model': 'addSlide',
		'click #preview': 'preview',
		'click #addBold': 'addBold',
		'click #addCursive': 'addCursive',
		'click #addUnderline': 'addUnderline',
		// 'keydown #font': 'typeFont'
		'click #unorderedList': 'addUnorderedList',
		'click #orderedList': 'addOrderedList'
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
	addUnorderedList: function(){
		document.execCommand("InsertOrderedList", false,"newOL");
	},
	addOrderedList: function(){
		document.execCommand("InsertUnorderedList", false,"newUL");
	},
	addSlide: function(){
		if(!$('#title').val()){
			$('#title').addClass('animation-validation');
			$('.icon-warning-sign').css('display', 'inline');
			setTimeout(function(){
				$('#title').removeClass('animation-validation');
			},1000);
		}
		else {
			var newTitle = $('#title').val();
			var newDescription = $('#description').html();
			console.log(newDescription);
			var newImage = $('#image').val();
			this.collection.add({
				title: newTitle,
				description: newDescription,
				imgSrc: newImage 
			});			
		}
		// console.log(this.collection);
	},
	// typeFont: function(e){
	// 	var size = $('#font').val();
	// 	$('#description').$el.execCommand('FontSize',false,size);
	// 	if(e.keyCode===13){
	// 		console.log(size);
	// 	}
	// },
	preview: function(){
		this.$el.css('display', 'none');
		photosView.render();
		photosView.$el.css('display', 'block');
		$('.arrow-nav').focus();
	}
});