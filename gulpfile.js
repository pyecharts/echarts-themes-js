var gulp = require('gulp');

var minify = require("gulp-minify");
var rename = require('gulp-rename');

THEME_FILES = ['./src/*.js'];

gulp.task("default", function(){
  gulp.src(THEME_FILES)
    .pipe(rename({dirname: ''}))
	.pipe(minify({
      noSource: true,
	  ext: { min: ".js"}
	}))
	.pipe(gulp.dest('echarts-themes-js'));
});
