var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css"); /*压缩css*/
var uncss = require('gulp-uncss'); /*清理无用css*/
var concat = require('gulp-concat'); /*合并文件*/
var imagemin = require('gulp-imagemin'); /*压缩图片*/
/*var cssnano = require('gulp-cssnano');*/
var clean = require('gulp-clean');/*清理文件*/
var pngquant = require('imagemin-pngquant');/*深度压缩png图片*/
var compass = require('gulp-compass');/*compass将sass编译成css*/
var watch = require('gulp-watch');/*热更新*/
var htmlreplace = require('gulp-html-replace');/*依赖加载文件替换*/

gulp.task('compass', () =>
    gulp.src('./dist/sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './dist/css',
      sass: './dist/sass'
    }))
);

gulp.task('min-css', ['compass'], () =>
    gulp.src('./dist/css/*.css')
    .pipe(concat("index.min.css"))
    .pipe(uncss({
        html: ['./dist/index.html']
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
        svgoPlugins: [{ removeViewBox: true }],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./build/images'))
);

gulp.task('html', ['min-img'], () =>
  gulp.src('./dist/index.html')
    .pipe(htmlreplace({
        'css': './css/index.min.css'
    }))
    .pipe(gulp.dest('./build'))
);

gulp.task('default', ['compass', 'min-css', 'min-img', 'html']);

gulp.task('watch', () =>
    gulp.watch('./dist/**/*', ['default'])
);

gulp.task('clean', () =>
    gulp.src('./build/*', {read: false})
    .pipe(clean())
);