const fs = require('fs')
const fsPromises = fs.promises
const conf = require('./conf')

const cssDist = `${conf.PROD}${conf.CSS_DIST}`

async function getFileList (dir) {
  let files
  try {
    files = await fsPromises.readdir(dir)
  } catch (err) {
    console.error('error', err)
  }

  if (files !== undefined) {
    files = files.filter(item => {
      return !(item.includes('map') || item.includes('br') || item.includes('gz'))
    })
    return files
  }
}

async function addCssTemplate () {
  try {
    const files = await getFileList(cssDist)
    let mainCss = ''
    files.forEach(async (fileName) => {
      if (fileName.includes('main')) {
        mainCss += conf.CSS_LINK.replace('%_file_%', fileName)
        await fsPromises.writeFile(`${cssDist}main.html`, mainCss)
      }
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

addCssTemplate()
