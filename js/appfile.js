window.position = 0;
var customPhotoStart = new Photo();
var photo1 = new Photo({title: 'Hello Github!'});
var customPhotoEnd = new Photo();

var positionImg = customPhotoStart.get('imgSrc');
var positionTitle = customPhotoStart.get('title');
var positionPar = customPhotoStart.get('description');
customPhotoEnd.set({title: positionTitle, imgSrc: positionImg, description: positionPar});
// var photoView = new PhotoView({model: photo});



var photos = new Photos([customPhotoStart, photo1, customPhotoEnd]);



var photosView = new PhotosView({collection: photos});

var createPhotos = new CreatePhotos([customPhotoStart]);
var createPhotoView = new CreatePhotoView({collection: createPhotos});
$('body').append(photosView.el);
$('body').append(createPhotoView.el);

