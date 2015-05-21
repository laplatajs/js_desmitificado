var gulp = require('gulp');
var browserSync = require('browser-sync');

// use default task to launch BrowserSync and watch JS files
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("src/**/*.js", browserSync.reload);
});

gulp.task('default', ['serve']);
