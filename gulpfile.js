var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
gulp.task('sass', function(){
	gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css/'));
});
gulp.task('uglify', function(){
	gulp.src('js/*/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('min js'));
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss',['sass']);
	gulp.watch('js/*/*.js', ['uglify']);
});

gulp.task('default',['sass', 'watch', 'uglify']);