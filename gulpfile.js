var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var optipng = require('imagemin-optipng');
var rimraf = require('rimraf');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');
var minifyHTML = require('gulp-minify-html');

gulp.task('clean', function(cb){
  rimraf('./public/', cb);
});

gulp.task( 'copy', function() {
    return gulp.src(
        [
			'src/bower_components/jquery/dist/jquery.min.js',
			'src/bower_components/jquery/dist/jquery.min.map'
		],
        { base: 'src' }
    )
    .pipe(gulp.dest('public') );
} );

gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('./src/css/*.css')
	.pipe(concat('app.min.css'))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('./public/css'))
});
 
gulp.task('compress-js', function() {
  gulp.src('./src/js/*.js')
	.pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('images', function() {
 return gulp.src('./src/img/*.png')
	.pipe(optipng({ optimizationLevel: 3 })())
	.pipe(gulp.dest('./public/img'));
});

gulp.task('htmlreplace-minify', function() {
  var opts = {
	quotes: true
  }
  return gulp.src('src/index.html')
    .pipe(htmlreplace({
        'css': 'css/app.min.css',
        'js': 'js/app.min.js'
    }))
	.pipe(minifyHTML(opts))
    .pipe(gulp.dest('public/'));
});

gulp.task('default', function(callback) {
  return runSequence(
    'clean',
	'less',
    ['minify-css', 'compress-js', 'images', 'htmlreplace-minify', 'copy'],
    callback
  );
});

