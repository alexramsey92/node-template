var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var bsConfig = require('./bs-config.js');

var path = {
   sass: 'client/sass/*.scss',
   css: 'client/css/*.css',
   html: 'client/*.html'
}

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(path.sass)
        .pipe(sass())
        .pipe(gulp.dest("client/css"))
        .pipe(browserSync.stream());
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['sass'], function () {

    // Serve files from the root of this project
    browserSync.init(bsConfig);

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(path.sass, ['sass']);
    gulp.watch(path.html).on('change', browserSync.reload);
});
