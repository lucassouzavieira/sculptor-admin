/**
 * Sculptor-admin
 * Basic admin template based on Sculptor CSS Framework
 *
 * Copyright (c) 2017 Lucas S. Vieira
 * Licensed under the MIT License
 * */

var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

/**
 * Scripts
 * @type {string}
 */
var scriptAssets = "js/*.js";

/**
 * Styles
 * @type {string}
 */
var stylesAssets = "sass/*.scss";

gulp.task('scripts', function () {
   return gulp.src(scriptAssets)
       .pipe(sourcemaps.init())
       .pipe(coffee())
       .pipe(uglify())
       .pipe(concat('sculptor-admin.js'))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
   gulp.watch(stylesAssets, ['styles']);
   gulp.watch(scriptAssets, ['scripts']);
});

