const { watch, dest, src } = require('gulp')
var sass = require('gulp-sass')
var Fiber = require('fibers')
var sourcemaps = require('gulp-sourcemaps')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var gulpif = require('gulp-if')
const rev = require('gulp-rev')
const size = require('gulp-size')
const conf = require('../../conf2')

sass.compiler = require('sass')
const SRC = conf.CSS_SRC
const DIST = `${conf.DIST}${conf.CSS_DIST}`


// const jsDist = `${conf.DEV}${conf.JS_DIST}`
// const cssDist = `${conf.DEV}${conf.CSS_DIST}`

// const output = process.env.NODE_ENV === 'production' ? 'output/prod' : 'output/dev'
// const sourcemapsIfProduction = process.env.NODE_ENV === 'production' && (() => ('.', { addComment: false }))()

const postCssPlugins = [
  autoprefixer()
]
// minify css with cssnano if production
process.env.NODE_ENV === 'production' && postCssPlugins.push(cssnano({ preset: 'default' }))

// compile scss to css
function scssToCss () {
  return src('index.scss', { cwd: `${SRC}` })
    .pipe(sourcemaps.init())
    .pipe(sass({ fiber: Fiber }).on('error', sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(gulpif(process.env.NODE_ENV === 'production', rev()))
    .pipe(gulpif(process.env.NODE_ENV === 'production', sourcemaps.write('.', { addComment: false }), sourcemaps.write()))
    .pipe(size({ showFiles: true }))
    .pipe(dest(DIST))
}

// gulp watch for scssToCss task
function watchScssToCss () {
  watch('../src/**/*.scss', scssToCss)
}

exports.scssToCss = scssToCss
exports.wwwatchScssToCsswe = watchScssToCss
