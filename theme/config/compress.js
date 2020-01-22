const conf = require('./conf')
const util = require('./util')
// const zlib = require('zlib');
const { Gzipper } = require('gzipper')

// const gzipJs = new Gzipper(util.globFiles(`${conf.JS_DIST}*.js`));
// (async () => {
//   await gzipJs.compress()
//   // const kkk = await util.globFiles(`${conf.JS_DIST}*.js`)
//   // console.log(kkk)
// })()

async function compressJs () {
  try {
    const files = await util.globFiles(`${conf.JS_DIST}*.js`)
    files.forEach(async (file) => {
      const gzipJs = new Gzipper(file)
      await gzipJs.compress()
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}
compressJs()
