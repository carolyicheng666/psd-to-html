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

/** ['min-css']
* 表示'min-img'依赖于'min-css'
* 即必须先执行完'min-css'，才能执行'min-img'
* 若不指定该字段，则默认并行执行
**/
gulp.task('min-img', ['min-css'], () =>
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