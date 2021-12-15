'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
const minify = require('gulp-minify');

gulp.task('sass', function(){
    return gulp.src('src/styles/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/styles/css'))
});

gulp.task('minifycss', function(){
    return gulp.src('src/styles/css/main.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/styles/css/'))
});

gulp.task('watch', function(){
    gulp.watch('src/styles/sass/**/*.scss', gulp.series('sass'));
});