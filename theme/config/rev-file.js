const conf = require('./conf')
const fs = require('fs')
const fsPromises = fs.promises
const hasha = require('hasha')

async function getFileList (dir) {
  let files
  try {
    files = await fsPromises.readdir(dir)
  } catch (err) {
    console.error('error', err)
  }

  if (files !== undefined) {
    files = files.filter(item => !item.includes('map'))
    return files
  }
}

function insertValue (string, value) {
  const dotIndex = string.indexOf('.')
  const name = string.slice(0, dotIndex)
  const ext = string.slice(dotIndex)
  return `${name}.${value}${ext}`
}

async function hashJs (val) {
  try {
    return (await hasha.fromFile(conf.JS_DIST + val, { algorithm: 'md5' })).slice(0, 10)
  } catch (err) {
    console.error('error', err)
  }
}

async function revFileJs () {
  try {
    const files = await getFileList(conf.JS_DIST)
    files.forEach(async (element) => {
      fsPromises.rename(conf.JS_DIST + element, conf.JS_DIST + insertValue(element, await hashJs(element)))
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

// async function revFileCss () {
//   try {
//     const files = await getFileList(conf.CSS_DIST)
//     files.forEach(async (element) => {
//       fsPromises.rename(DIR + element, DIR + insertValue(element, await hash(element)))
//     })
//   } catch (error) {
//     console.error('Error occurred:', error)
//   }
// }

revFileJs()
// revFileCss()
