/////////DEPENDENCIES/////////
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

///WATCH CHANGES TO SCSS FILES//////

/////SASS///////

//////CONCATS TO MASTER.CSS
gulp.task('styles', function(){
  return gulp.src('./styles/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./styles'));
});

///WATCH CHANGES TO SCSS FILES//////
gulp.task('default',function() {
    gulp.watch('./styles/sass/**/*.scss',['styles']);
});
