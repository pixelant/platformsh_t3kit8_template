const globby = require('globby')

const util = module.exports = {}

util.globFiles = async function (dir) {
  try {
    return globby(dir)
  } catch (err) {
    console.error('error', err)
  }
}
