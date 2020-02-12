const { series, parallel } = require('gulp')
const { scssToCss, scssToCssWatch } = require('./sass')
const { compressCss, compressJs } = require('./compress')
const { clean } = require('./clean')
const { compileJs, compileJsWatch } = require('./rollup')
const { revJs } = require('./rev')
const { addJsTemplate, addCssTemplate } = require('./tmpl')
const { serve } = require('./browser-sync')

if (process.env.NODE_ENV === 'production') {
  exports.build = series(
    clean,
    parallel(scssToCss, compileJs),
    revJs,
    parallel(addJsTemplate, addCssTemplate),
    // addJsTemplate,
    // addCssTemplate,
    parallel(compressCss, compressJs)
  )
} else {
  exports.build = series(
    clean,
    parallel(scssToCss, compileJs),
    parallel(addJsTemplate, addCssTemplate),
    // addJsTemplate,
    // addCssTemplate
  )
}

exports.default = series(
  clean,
  parallel(scssToCss, compileJs),
  parallel(addJsTemplate, addCssTemplate),
  parallel(scssToCssWatch, compileJsWatch, serve)
)

// exports.clean = clean
// exports.addJsTemplate = addJsTemplate
// exports.revJs = revJs
// exports.serve = serve
// exports.compileJs = compileJs
