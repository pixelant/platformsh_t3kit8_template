const bs = require('browser-sync').create()

// const css = (file) => `<link rel="stylesheet" type="text/css" href="/${file}"/>`
// const js = (file) => `<script src="js/${file}"></script>`

bs.init({
  ui: false,
  proxy: 'http://t3kit10.t3.localhost',
  files: ['dist'],
  serveStatic: ['dist/development'],
  port: 9001,
  ghostMode: false,
  open: false,
  rewriteRules: [
    {
      match: new RegExp("typo3temp/assets/(.+?)(?=['\"])", 'g'),
      replace: '$1'
    }
  ]
  // snippetOptions: {
  //   rule: {
  //     match: /<\/head>/i,
  //     fn: function (snippet, match) {
  //       return `
  //       ${js('main.js')}
  //       ${match}
  //       ${snippet}
  //       `
  //     }
  //   }
  // }
})

// TODO: add proxy based on d-compose variable
