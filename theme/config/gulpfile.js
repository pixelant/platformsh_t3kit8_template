const { series, parallel } = require('gulp')
const { scssToCss, wwwe } = require('./gulp/sass')
const { compressCss, compressJs } = require('./gulp/compress')
// const { compress } = require('./gulp/compress')
// const { brotliCss, gzipCss, brotliJs, gzipJs } = require('./gulp/compress')
const { clean } = require('./gulp/clean')
const { compileJs, compileMainJs } = require('./gulp/rollup')
const { asyncAwaitTask } = require('./gulp/taskz')
const { revJs } = require('./gulp/rev')
const { addJsTemplate, addCssTemplate } = require('./tmpl')


// exports.compress = compress
exports.clean = clean
exports.addJsTemplate = addJsTemplate
exports.revJs = revJs
exports.compileJs = compileJs
// exports.default = compileJs
// exports.build = series(
//   clean,
//   parallel(scssToCss, compileJs),
//   // parallel(brotliCss, brotliJs, gzipCss, gzipJs)
// )

// exports.default = wwwe
// exports.default = asyncAwaitTask


// exports.build = build;
// exports.default = series(clean, build);

if (process.env.NODE_ENV === 'production') {
  exports.build = series(
    clean,
    parallel(scssToCss, compileJs),
    revJs,
    addJsTemplate,
    addCssTemplate,
    parallel(compressCss, compressJs)
  )
} else {
  exports.build = series(
    clean,
    parallel(scssToCss, compileJs),
    addJsTemplate,
    addCssTemplate
  )
}
