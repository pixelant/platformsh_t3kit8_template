const fs = require('fs')
const fsPromises = fs.promises
const conf = require('../conf')

const CSS_DIST = `${conf.DIST}${conf.CSS_DIST}`
const JS_DIST = `${conf.DIST}${conf.JS_DIST}`

async function getFileList (dir) {
  let files
  try {
    files = await fsPromises.readdir(dir)
  } catch (err) {
    console.error('error', err)
  }

  if (files !== undefined) {
    files = files.filter(item => {
      return !(item.includes('map') || item.includes('br') || item.includes('gz') || item.includes('html'))
    })
    return files
  }
}

async function addJsTemplate () {
  try {
    const files = await getFileList(JS_DIST)
    let link = ''
    files.forEach(async (fileName) => {
      if (fileName.includes('jquery') || fileName.includes('main')) {
        link += conf.JS_LINK.replace('%_file_%', fileName) + '\n'
        await fsPromises.writeFile(`${JS_DIST}main.html`, link)
      } else {
        let tmplName
        if (fileName.includes('-')) {
          tmplName = fileName.split('.')[0].split('-')[0]
        } else {
          tmplName = fileName.split('.')[0]
        }
        link = conf.JS_LINK.replace('%_file_%', fileName)
        await fsPromises.writeFile(`${JS_DIST}${tmplName}.html`, link)
      }
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

async function addCssTemplate () {
  try {
    const files = await getFileList(CSS_DIST)
    let link = ''
    files.forEach(async (fileName) => {
      if (fileName.includes('main')) {
        link += conf.CSS_LINK.replace('%_file_%', fileName) + '\n'
        await fsPromises.writeFile(`${CSS_DIST}main.html`, link)
      } else {
        let tmplName
        if (fileName.includes('-')) {
          tmplName = fileName.split('.')[0].split('-')[0]
        } else {
          tmplName = fileName.split('.')[0]
        }
        link = conf.CSS_LINK.replace('%_file_%', fileName)
        await fsPromises.writeFile(`${CSS_DIST}${tmplName}.html`, link)
      }
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

exports.addJsTemplate = addJsTemplate
exports.addCssTemplate = addCssTemplate
