const { dest, src } = require('gulp')
const rev = require('gulp-rev')
var revdel = require('gulp-rev-delete-original')
const conf = require('../../conf2')


const JS_DIST = `${conf.DIST}${conf.JS_DIST}`

function revJs () {
  return src(`${JS_DIST}**/*.js`)
    .pipe(rev())
    .pipe(revdel())
    .pipe(dest(JS_DIST))
}

exports.revJs = revJs
