var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css"); /*压缩css*/
var uncss = require('gulp-uncss'); /*清理无用css*/
var concat = require('gulp-concat'); /*合并文件*/
var imagemin = require('gulp-imagemin'); /*压缩图片*/
/*var cssnano = require('gulp-cssnano');*/
var clean = require('gulp-clean');/*清理文件*/
var pngquant = require('imagemin-pngquant');/*深度压缩png图片*/
var compass = require('gulp-compass');/*compass将sass编译成css*/

/*弃用compass, 改用sass+autoprefixer模式，并集成于postcss中*/
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var watch = require('gulp-watch');/*热更新*/
var htmlreplace = require('gulp-html-replace');/*依赖加载文件替换*/

var browserSync = require('browser-sync').create();/*浏览器同步测试*/

var uglify = require("gulp-uglify");/*压缩js*/

gulp.task('compass', () =>
    gulp.src('./dist/sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './dist/css',
      sass: './dist/sass'
    }))
);

gulp.task('sass', function() {
  var plugins = [
    autoprefixer({ browsers: ['last 2 versions'], cascade: false}),
  ];
  return gulp.src('./dist/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('min-css', ['sass'], () =>
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

gulp.task('min-js', ['min-img'], () =>
    gulp.src(['./dist/js/jquery.min.js', './dist/js/scrollreveal.min.js', './dist/js/index.js'])
    .pipe(concat("index.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
);

gulp.task('html', ['min-js'], () =>
  gulp.src('./dist/index.html')
    .pipe(htmlreplace({
        'css': './css/index.min.css',
        'js': './js/index.min.js'
    }))
    .pipe(gulp.dest('./build'))
);

gulp.task('default', ['sass', 'min-css', 'min-img', 'min-js', 'html']);

gulp.task('watch', ['default'], () => {
    browserSync.init({
        server: './'
    })
    gulp.watch(['./dist/*', './dist/**/*'], ['reload'])
});

gulp.task('clean', () =>
    gulp.src('./build/*', {read: false})
    .pipe(clean())
);

gulp.task('reload', ['default'], () =>
    browserSync.reload()
);

