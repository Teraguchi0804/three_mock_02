import gulp from "gulp";
import plumber from "gulp-plumber";
import concat from 'gulp-concat';
import PATH from '../../config';

// ------------------------------------------------------------
//  library
// ------------------------------------------------------------
gulp.task('concatJSLibs', ()=>{

    var src = [
                PATH.dev.devjs + 'libs/modernizr.js',
                PATH.dev.devjs + 'libs/jquery.js',
                PATH.dev.devjs + 'libs/jquery.pjax.js',
                PATH.dev.devjs + 'libs/jquery.mousewheel.js',
                // PATH.dev.devjs + 'libs/hashchangeEvent.js',
                
                PATH.dev.devjs + 'libs/TweenMax.min.js',
                PATH.dev.devjs + 'libs/DrawSVGPlugin.min.js',
                PATH.dev.devjs + 'libs/snap.svg.min.js',

                PATH.dev.devjs + 'libs/pixi.min.js',
                PATH.dev.devjs + 'libs/minMatrix.js',
                PATH.dev.devjs + 'libs/three.min.js',
                PATH.dev.devjs + 'libs/Stats.js',
                PATH.dev.devjs + 'libs/dat.gui.min.js',
              ]

    gulp.src(src)
        .pipe(plumber())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(PATH.dev.js + 'common/'));

});

// ------------------------------------------------------------
// main
// ------------------------------------------------------------
gulp.task('concatJS', ()=>{

    var src = [
                  PATH.dev.devjs + 'src/gb.js',

                  PATH.dev.devjs + 'src/myLibs/**/*.js',
                  PATH.dev.devjs + 'src/Func/**/*.js',
                  PATH.dev.devjs + 'src/Layout/**/*.js',
                  PATH.dev.devjs + 'src/Display/**/*.js',

              ]

    gulp.src(src)
        .pipe(plumber())
        // .pipe(babel({presets: [es2015]}))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(PATH.dev.js + 'common/'));

});