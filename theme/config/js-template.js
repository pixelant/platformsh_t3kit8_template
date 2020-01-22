const fs = require('fs')
const fsPromises = fs.promises
// const replace = require('replace-in-file')
const conf = require('./conf')

// const jsSrc = '<script src="{f:uri.resource(path:"js/%_file_%", extensionName: "{site.identifier}")}"></script>'

// async function replaceFileNameInTemplate (tmpl, oldFileName, newFileName) {
//   const options = {
//     files: tmpl,
//     from: oldFileName,
//     to: newFileName
//   }
//   try {
//     console.log(options)
//     await replace(options)
//   } catch (error) {
//     console.error('Error occurred:', error)
//   }
// }

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

async function addJsTemplate () {
  try {
    const files = await getFileList(conf.JS_DIST)
    let mainJs = ''
    let plugin1 = ''
    let plugin2 = ''
    files.forEach(async (fileName) => {
      if (fileName.includes('jquery') || fileName.includes('main')) {
        console.log('TCL: addFileRevToTemplate -> fileName', fileName)
        mainJs += conf.JS_LINK.replace('%_file_%', fileName) + '\n'
        console.log('TCL: addFileRevToTemplate -> str', mainJs)
        await fsPromises.writeFile(`${conf.JS_DIST}main.html`, mainJs)
      } else if ((fileName.includes('plugin1'))) {
        plugin1 = conf.JS_LINK.replace('%_file_%', fileName)
        await fsPromises.writeFile(`${conf.JS_DIST}plugin1.html`, plugin1)
      } else {
        plugin2 = conf.JS_LINK.replace('%_file_%', fileName)
        await fsPromises.writeFile(`${conf.JS_DIST}plugin2.html`, plugin2)
      }
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

addJsTemplate()
