var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

gulp.task('min-css', () =>
    gulp.src('./dist/css/*.css')
    .pipe(concat("index.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build/css'))
);

gulp.task('min-img', () =>
    gulp.src('./dist/images/*')
    .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: true }]
    }))
    .pipe(gulp.dest('./build/images'))
);

gulp.task('default', ['min-css', 'min-img']);