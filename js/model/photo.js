var Photo = Backbone.Model.extend({
	defaults: {
		imgSrc: 'img/zdjecie.jpg',
		description: 'Była to moja pierwsza sensowna wiadomość pod zdjęciem, na którym wyglądasz inaczej niż w rzeczywistości',
		title: 'Title',
		show: true
	}
});