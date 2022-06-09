const { src, dest, watch } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');



function css( done ) {
    src('./gulp/scss/**/*.scss') // Identificar el archivo .SCSS a compilar
        .pipe(sourcemaps.init())
        .pipe( plumber())
        .pipe( sass() ) // Compilarlo
        .pipe( dest('./styles') ) // Almacenarla en el disco duro
    done();
}


function dev( done ) {
    watch('./gulp/scss/**/*.scss', css);
    done();
}


exports.css = css;
exports.dev = dev ;