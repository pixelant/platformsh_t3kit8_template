const del = require('del')
const conf = require('../../conf2')

async function clean () {
  try {
    const deletedDirectoryPaths = await del([`${conf.DIST}*`], { force: true })
    console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'))
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

exports.clean = clean
