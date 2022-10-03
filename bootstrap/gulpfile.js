var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
        .pipe(sass()) //Converter Sass para CSS
        .pipe(gulp.dest('src/css'));
    });