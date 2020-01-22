var gulp = require('gulp')
var rollup = require('rollup-stream')
var source = require('vinyl-source-stream')

gulp.task('rollup', function () {
  return rollup({
    input: '.src/index.js'
    // output: [
    //   {
    //     format: 'iife',
    //     file: 'dist/ttt.js',
    //     globals: {
    //       jquery: 'jQuery'
    //     }
    //   }
    // ],
    // external: ['jquery']
  })
    .pipe(source('index.js', './src'))
    // give the file the name you want to output with
    // .pipe(source('app.js'))

    // and output to ./dist/app.js as normal.
    .pipe(gulp.dest('./dist'))
})
