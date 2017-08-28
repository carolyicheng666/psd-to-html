var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css"); //压缩css
var uncss = require('gulp-uncss'); //清理无用css
var concat = require('gulp-concat'); //合并文件
var imagemin = require('gulp-imagemin'); //压缩图片

gulp.task('min-css', () =>
    gulp.src('./dist/css/*.css')
    .pipe(concat("index.min.css"))
    .pipe(uncss({
        html: ['index.html']
    }))
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