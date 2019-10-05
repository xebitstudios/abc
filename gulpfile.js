// Author: Adetunji Oduyela
// Date: Apr 6, 2016

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var es = require('event-stream');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var minifyhtml = require('gulp-htmlmin');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var server = require('gulp-develop-server');
var gzip = require('gulp-gzip');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');

// gulp.task('clean:dist', function () {
//   return del([
//       'app/dist/**/*'
//   ]);
// });

gulp.task('templates', function () {
  return gulp.src('app/templates/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('app/dist'));
});

gulp.task('styles', function () {
  gulp.src([
    'app/css/components/bootstrap.css',
    'app/css/components/ng-modal.css',
    'app/css/font-awesome.css',
    'app/css/global.css',
    'app/css/app.css'
    ])
    .pipe(concat('ssceexamsstyles.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(watch('app/css/*.css'))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('lint', function() {
    gulp.src([
    'app/js/app.js',
    'app/js/constants.js',
    'app/js/controllers/*.js',
    'app/js/directives/*.js',
    'app/js/filters/*.js',
    'app/js/services/*.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

gulp.task('watch', function (event) {
  console.log('watch triggered...');
  console.log(event);
  gulp.watch('app/css/*.css', ['styles']);
  gulp.watch('app/js/**/*.js', ['appscripts']);
  gulp.watch('app/lib/**/*.js', ['libscripts']);
});

gulp.task('libscripts', function () { 
  gulp.src([
    'app/lib/jquery.js',
    'app/lib/angular/angular.js',
    'app/lib/angular/angular-route.js',
    'app/lib/angular/angular-sanitize.js',
    'app/lib/angular/angular-aria.js',
    'app/lib/angular/angular-animate.js',
    'app/lib/angular/angular-resource.js',
    'app/lib/angular/ng-modal.js',
    'app/lib/Sortable.js',
    'app/lib/ui-bootstrap.js',
    'app/lib/bootstrap.js',
    'app/lib/lodash.js',
    'app/lib/underscore.js',
    'app/lib/angular-growl.js',
    'app/lib/angular-datepicker.js',
    'app/lib/FooTable/js/footable.js',
    'app/lib/FooTable/js/angular-footable.js',
    'app/lib/highcharts-custom.js',
    'app/lib/select.js',
    'app/lib/d3/angular-nvd3.js'
    ])
    .pipe(concat('ssceexamslibraries.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/dist'))
});

gulp.task('appscripts', function () { 
  gulp.src([
    'app/js/app.js',
    // 'app/js/config.js',
    // 'app/js/constants.js',
    'app/js/controllers/*.js',
    'app/js/directives/*.js',
    'app/js/services/*.js',
    'app/js/filters/*.js',
    'app/js/templates.js'
  ])
  .pipe(concat('ssceexams.js'))
  .pipe(rename({suffix: '.min'}))
  // .pipe(uglify())
  // .pipe(minify({mangle: false}))
  .pipe(gulp.dest('app/dist'))
});

gulp.task('compress', function() {
    gulp.src('app/dist/*')
  .pipe(gzip())
  .pipe(gulp.dest('app/dist/gzip'));
});

gulp.task( 'server:start', function() {
    server.listen( { path: 'scripts/web-server.js' } );
});
 
gulp.task( 'server:restart', function() {
    gulp.watch( [ 'app/js/app.js' ], server.restart );
});

// default task
gulp.task('default', ['templates', 'libscripts', 'styles', 'scripts', 'templatesmin', 'partialsmin', 'templatesdirectivesmin', 'watch'], function () {
  // just run gulp at the console to have this started and all files watched continously
});

gulp.task('min', ['templates', 'libscripts', 'styles', 'appscripts', 'watch'], function () {
  // just run gulp at the console to have this started and all files watched continously
});

gulp.task('serve', ['templates', 'libscripts', 'appscripts', 'styles', 'compress', 'server:start', 'watch'], function () {
  // just run gulp at the console to have this started and all files watched continously
});

// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');
// var connect = require('gulp-connect');
// var es = require('event-stream');
// var watch = require('gulp-watch');
// var minifycss = require('gulp-minify-css');
// var minifyHTML = require('gulp-minify-html-2');
// var rename = require('gulp-rename');
// var gutil = require('gulp-util');
// var jshint = require('gulp-jshint');
// var stylish = require('jshint-stylish');

// gulp.task('styles', function () {
//   gulp.src([
//     'app/css/components/bootstrap.css',
//     'app/css/components/ng-modal.css',
//     'app/css/font-awesome.css',
//     'app/css/global.css',
//     'app/css/app.css',
//     'app/css/charts.css',
//     'app/lib/FooTable/css/footable.core.css'
//     ])
//     .pipe(concat('tccss.css'))
//     // .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(watch('app/css/*.css'))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('lint', function() {
//     gulp.src([
//     'app/js/app.js',
//     'app/js/controllers/*.js',
//     'app/js/directives/*.js',
//     'app/js/filters/*.js',
//     'app/widgets/*/*.js',
//     'app/js/services/*.js'
//   ])
//     .pipe(jshint())
//     .pipe(jshint.reporter(stylish))
// });

// gulp.task('templatesmin', function () {
//   var opts = {comments:true,spare:true};
//   gulp.src('app/templates/*.html')
//     .pipe(minifyHTML(opts))
//     .pipe(watch('app/templates/*.html'))
//     .pipe(gulp.dest('dist/templates'));
// });

// gulp.task('templatesdirectivesmin', function () {
//   var opts = {comments:true,spare:true};
//   gulp.src('app/templates/directives/*.html')
//     .pipe(minifyHTML(opts))
//     .pipe(watch('app/templates/directives/*.html'))
//     .pipe(gulp.dest('dist/templates/directives'));
// });

// gulp.task('partialsmin', function () {
//   var opts = {comments:true,spare:true};
//   gulp.src('app/partials/*.html')
//     .pipe(minifyHTML(opts))
//     .pipe(watch('app/partials/*.html'))
//     .pipe(gulp.dest('dist/partials'));
// });

// gulp.task('watch', function (event) {
//   console.log('watch triggered...');
//   console.log(event);
//   gulp.watch('app/css/*.css', ['styles']);
//   gulp.watch('app/js/**/*.js', ['scripts']);
//   gulp.watch('app/templates/*.html', ['templatesmin']);
//   gulp.watch('app/partials/*.html', ['partialsmin']);
// });

// // gulp.task('scripts', function () {

// //   var tcapi = gulp.src('app/js/API/*.js');
// //   // var tccontrollers = gulp.src('app/js/controllers/*.js');
// //   var tcdirectives = gulp.src('app/js/directives/*.js');
// //   var tcfilters = gulp.src('app/js/filters/*.js');
// //   var tcservices = gulp.src('app/js/services/*.js');
// //   // var baseApp = gulp.src('app/js/app.js');

// //   return es.merge(tcapi, tcdirectives, tcfilters, tcservices)
// //     .pipe(concat('baseApp.js'))
// //     // .pipe(rename({suffix: '.min'}))
// //     .pipe(uglify())
// //     .pipe(gulp.dest('dist'))
// // });

// // gulp.task('controllersmin', function () {
// //   gulp.src('app/js/controllers/*.js')
// //     .pipe(concat('ctrl.js'))
// //     .pipe(uglify())
// //     .pipe(watch('app/js/controllers/*.js'))
// //     .pipe(gulp.dest('dist'));
// // });

// gulp.task('appscripts', function () { 
//   gulp.src([
//     'app/js/app.js',
//     'app/js/controllers/*.js',
//     'app/js/directives/*.js',
//     'app/js/filters/*.js',
//     'app/js/services/*.js'
//   ])
//     .pipe(concat('baseApp.js'))
//   // .pipe(minify({mangle: false}))
//   .pipe(uglify())
//   .pipe(gulp.dest('dist'))
// });

// gulp.task('libscripts', function () { 
//   gulp.src([
//     'app/lib/jquery.js',
//     'app/lib/angular/angular.js',
//     'app/lib/angular/angular-route.js',
//     'app/lib/angular/angular-sanitize.js',
//     'app/lib/angular/angular-aria.js',
//     'app/lib/angular/angular-animate.js',
//     'app/lib/angular/angular-cookies.js',
//     'app/lib/angular/angular-messages.js',
//     'app/lib/angular/angular-resource.js',
//     'app/lib/angular/angular-locale_es.js',
//     'app/lib/angular/ng-modal.js',
//     'app/lib/bootstrap.js',
//     'app/lib/lodash.js',
//     'app/lib/underscore.js',
//     'app/lib/highcharts-custom.js',
//     'app/lib/angular-growl.js',
//     'app/lib/angular-datepicker.js',
//     'app/lib/FooTable/js/footable.js',
//     'app/lib/FooTable/js/angular-footable.js'
//     ])
//     .pipe(concat('tclibraries.js'))
//     // .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist'))
// });

// // gulp.task('appjs', function () { 
// //   gulp.src(['app/js/app.js'])
// //     .pipe(uglify())
// //     .pipe(gulp.dest('dist'))
// // });

// //HTML
// gulp.task('copy_index', function() {
//     return gulp.src('./app/index.html')
//         .pipe(gulp.dest('dist'))
//         .on('error', gutil.log);
// });

// //Copy Favicon in the build
// gulp.task('copy_favicon', function() {
//     return gulp.src('./app/favicon.ico')
//         .pipe(gulp.dest('dist'))
//         .on('error', gutil.log);
// });

// //Build static temporary files
// gulp.task('build_images', function() {
//     return gulp.src('./app/img/*.*')
//         .pipe(gulp.dest('dist/images'))
//         .on('error', gutil.log);
// });

// gulp.task('build_fonts', function() {
//   return gulp.src(['./app/bower_components/font-awesome/fonts/*.*', './app/bower_components/bootstrap/fonts/*.*'])
//       .pipe(gulp.dest('dist/fonts'))
//       .on('error', gutil.log);
// });

// //Webservice and live reload
// gulp.task('webserver', function () {
//     connect.server({
//         root: ['dist'],
//         port: 8065,
//         livereload: {
//             port: 8081
//         }
//     });
// });

// gulp.task('livereload', function() {
//   gulp.src(['tmp/css/*.css', 'tmp/js/*.js'])
//       .pipe(watch('tmp/css/*.css'))
//       .pipe(watch('tmp/js/*.js'))
//       .pipe(watch('tmp/*.html'))
//       .pipe(connect.reload())
//       .on('error', gutil.log);
// });

// // default task
// gulp.task('default', ['appscripts', 'libscripts', 'styles', 'templatesmin', 'partialsmin', 'templatesdirectivesmin', 'copy_index', 'copy_favicon', 'build_images', 'build_fonts', 'webserver', 'livereload', 'watch'], function () {
//   // just run gulp at the console to have this started and all files watched continously
// });

// gulp.task('files3', ['controllersmin', 'libscripts', 'styles', 'scripts', 'watch'], function () {
//   // just run gulp at the console to have this started and all files watched continously
// });

