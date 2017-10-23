const gulp = require("gulp"),
    concat = require("gulp-concat"),
    // gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    // react = require('gulp-react'),
    // minify = require('gulp-babel-minify'),
    babel = require('gulp-babel'),
    es6transpiler = require('gulp-es6-transpiler'),
    // jsx = require('gulp-jsx'),
    // for es6
    browserify = require('browserify'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    // gulpif = require('gulp-if'),
    source = require('vinyl-source-stream');

// gulp.task('watch', function() {
//   return watch('./controllers/', function () {
//     gulp.src([
//                 './controllers/main.js',
//                 './controllers/paint.js',
//                 './controllers/config.js',
//                 './controllers/analyzer.js',
//                 './controllers/neural-network.js'
//         ])
//         .transform('babelify', {presets: ['es2015', 'js']})
//         .bundle()
//         .pipe(concat('bundle.js'))
//         .pipe(gulp.dest('./'));
//       });
// });

gulp.task('watch', ['buildDebug'], function () {
    gulp.watch('./controllers/*.js', ['buildDebug']);
});

gulp.task('buildDebug', function () {
    return browserify({entries: './controllers/main.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./'));
});

// gulp.task('apply-prod-environment', function() {
//     process.env.NODE_ENV = 'production';
// });
//
// gulp.task('prodBuild',['apply-prod-environment', 'buildProd'], function() {});
//
// gulp.task('buildDebug', function () {
//     return browserify({entries: './app/editor/es6/main.jsx', extensions: ['.jsx'], debug: true})
//         .transform('babelify', {presets: ['es2015', 'react']})
//         .bundle()
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest('./app/'));
// });
//
// gulp.task('buildProd', function () {
//     return browserify({entries: './app/editor/es6/main.jsx', extensions: ['.jsx'], debug: true})
//         .transform('babelify', {presets: ['es2015', 'react']})
//         .bundle()
//         .pipe(source('bundle.js'))
//         .pipe(streamify(uglify()))
//         .pipe(gulp.dest('./app/'));
// });
//
// gulp.task('watchDebug', ['buildDebug'], function () {
//     gulp.watch('./app/editor/es6/**/*.jsx', ['buildDebug']);
// });
