const conf = require('./conf')
const util = require('./util');

(async () => {
  const kkk = await util.globFiles(`${conf.JS_DIST}*.js`)
  console.log(kkk)
})()
