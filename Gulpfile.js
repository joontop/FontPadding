const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const pump = require('pump');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const ghPages = require('gulp-gh-pages');

const version = '1.0.0';

gulp.task('clean', function () {
    return gulp.src('build')
        .pipe(clean())
});

gulp.task('concat', function () {
    return gulp.src(['src/js/lib/**/*.js', 'src/js/Stuff.js', 'src/js/Util.js', 'src/js/components/*.js', 'src/js/index.js'])
        .pipe(concat('font-padding' + version + '.js', {newLine: '\r\n'}))
        .pipe(gulp.dest('build'))
});

gulp.task('uglify', function (cb) {
    pump([
        gulp.src('build/*.js'),
        uglify(),
        gulp.dest('build')
    ], cb)
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*', ['build:dev'])
});

gulp.task('deploy:source', function () {
    return gulp.src('build/**/*')
        .pipe(ghPages())
});

gulp.task('connect', function () {
    connect.server({
        port: 8082,
        root: 'build'
    })
});

gulp.task('dev', function (callback) {
    runSequence('connect', 'watch', callback);
});

gulp.task('deploy', function (callback) {
    runSequence('clean', 'concat', 'uglify', 'deploy:source', callback);
});

gulp.task('build:dev', function (callback) {
    runSequence('clean', 'concat', callback);
});
gulp.task('build', function (callback) {
    runSequence('clean', 'concat', 'uglify', callback);
});