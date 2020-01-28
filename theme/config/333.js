var HTMLParser = require('node-html-parser')
var fs = require('fs')

var rawHtml = fs.readFileSync('index.html', 'utf8', function (err, data) {
  if (err) throw err
  // console.log(data)
})

// var rawHtml = require('fs').readFileSync('index.html')
// // var rawHtml = '<ul id="list"><li>Hello World</li></ul>'

var root = HTMLParser.parse(rawHtml, {
  lowerCaseTagName: false,
  script: true,
  style: true,
  pre: false,
  comment: false
})

// console.log(rawHtml)
// console.log(root)
// console.log(root.structuredText)
// console.log(root.querySelectorAll('script'))

const bbb = root.querySelectorAll('script')

function ggg () {
  bbb.forEach(element => {
    console.log('TCL: ggg -> element', element.toString())
  })
}

ggg()
