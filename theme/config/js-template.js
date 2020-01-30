const fs = require('fs')
const fsPromises = fs.promises
const conf = require('./conf')

const jsDist = `${conf.DEV}${conf.JS_DIST}`
const cssDist = `${conf.DEV}${conf.CSS_DIST}`

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

async function addJsTemplate () {
  try {
    const files = await getFileList(jsDist)
    let mainJs = ''
    let plugin1 = ''
    let plugin2 = ''
    files.forEach(async (fileName) => {
      if (fileName.includes('jquery') || fileName.includes('main')) {
        // console.log('TCL: addFileRevToTemplate -> fileName', fileName)
        mainJs += conf.JS_LINK.replace('%_file_%', fileName) + '\n'
        // console.log('TCL: addFileRevToTemplate -> str', mainJs)
        await fsPromises.writeFile(`${jsDist}main.html`, mainJs)
      } else if ((fileName.includes('plugin1'))) {
        plugin1 = conf.JS_LINK.replace('%_file_%', fileName)
        await fsPromises.writeFile(`${jsDist}plugin1.html`, plugin1)
      } else {
        plugin2 = conf.JS_LINK.replace('%_file_%', fileName)
        await fsPromises.writeFile(`${jsDist}plugin2.html`, plugin2)
      }
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

addJsTemplate()
