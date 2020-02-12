const { dest, src, parallel, series } = require('gulp')
const size = require('gulp-size')
const gulpBrotli = require('gulp-brotli')
var gulpGzip = require('gulp-gzip')
const conf = require('../../conf2')

// const output = process.env.NODE_ENV === 'production' ? 'output/prod' : 'output/dev'

// const CSS_SRC = conf.CSS_SRC
// const JS_SRC = conf.CSS_SRC
const CSS_DIST = `${conf.DIST}${conf.CSS_DIST}`
const JS_DIST = `${conf.DIST}${conf.JS_DIST}`

// compress with brotli
function brotliCss () {
  return src(`${CSS_DIST}**/*.css`)
    .pipe(gulpBrotli())
    .pipe(size({ showFiles: true }))
    .pipe(dest(CSS_DIST))
}
function brotliJs () {
  return src(`${JS_DIST}**/*.js`)
    .pipe(gulpBrotli())
    .pipe(size({ showFiles: true }))
    .pipe(dest(JS_DIST))
}

// compress with gzip
function gzipCss () {
  return src(`${CSS_DIST}**/*.css`)
    .pipe(gulpGzip())
    .pipe(size({ showFiles: true }))
    .pipe(dest(CSS_DIST))
}
function gzipJs () {
  return src(`${JS_DIST}**/*.js`)
    .pipe(gulpGzip())
    .pipe(size({ showFiles: true }))
    .pipe(dest(JS_DIST))
}

exports.compressCss = parallel(brotliCss, gzipCss)
exports.compressJs = series(brotliJs, gzipJs)
// exports.brotliCss = brotliCss
// exports.gzipCss = gzipCss
// exports.brotliJs = brotliJs
// exports.gzipJs = gzipJs
