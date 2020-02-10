var sass = require('sass')
// const fs = require('fs')
// const fsPromises = fs.promises
const fs = require('fs-extra')
const conf1 = require('./conf1')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('postcss')

const cssDist = `${conf1.DIST}${conf1.CSS_DIST}`

var resultCss = sass.renderSync({
  file: 'src/styles/index.scss',
  outFile: `${cssDist}main.css`,
  sourceMap: true,
  sourceMapContents: true,
  omitSourceMapUrl: false
  // sourceMapEmbed: true
})
// console.log('TCL: resultCss', resultCss.css.toString())

async function prefixCss (val) {
  // console.log('TCL: prefixCss -> val', val)
  try {
    return await postcss([autoprefixer]).process(val)
    // return await postcss([autoprefixer]).process(val, { from: `${cssDist}main.css` })
  } catch (error) {
    console.error('Error occurred (prefixCss):', error)
  }
}

async function nanoCss (val) {
  try {
    return await postcss(cssnano).process(val.toString(), { from: val })
  } catch (error) {
    console.error('Error occurred (prefixCss):', error)
  }
}

async function renderCss () {
  try {
    let css = await prefixCss(resultCss.css)
    console.log('TCL: renderCss -> css', css.css)
    // console.log('TCL: renderCss -> css', resultCss.css.toString())
    // css = await nanoCss(resultCss.css)
    // await fs.outputFile(`${cssDist}main.css`, css)
    // await fs.outputFile(`${cssDist}main.css`, resultCss.css)
    // await fs.outputFile(`${cssDist}main.css.map`, resultCss.map)
  } catch (error) {
    console.error('Error occurred3:', error)
  }
}

renderCss()
