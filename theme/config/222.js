const { Parser } = require('htmlparser2')
const { DomHandler } = require('domhandler')

// var rawHtml = require('fs').readFileSync('index.html')

const rawHtml = '<!DOCTYPE html>\n' +
'<html dir="ltr" lang="en-US">\n' +
'<head>\n' +
'\n' +
'<meta charset="utf-8">\n' +
'<!-- \n' +
'\tThis website is powered by TYPO3 - inspiring people to share!\n' +
'\tTYPO3 is a free open source Content Management Framework initially created by Kasper Skaarhoj and licensed under GNU/GPL.\n' +
'\tTYPO3 is copyright 1998-2020 of Kasper Skaarhoj. Extensions are copyright of their respective owners.\n' +
'\tInformation and contribution at https://typo3.org/\n' +
'-->\n' +
'\n' +
'\n' +
'\n' +
'<title>Home - TYPO3 :: t3kit10 :: Dev mode *(local)</title>\n' +
'<meta name="generator" content="TYPO3 CMS" />\n' +
'<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n' +
'<meta name="twitter:card" content="summary" />\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'<link rel="apple-touch-icon" sizes="180x180" href="/">\n' +
'  <link rel="icon" type="image/png" sizes="32x32" href="/">\n' +
'  <link rel="icon" type="image/png" sizes="16x16" href="/">\n' +
'  <link rel="manifest" href="/">\n' +
'  <link rel="mask-icon" href="/" color="#1d1d1d">\n' +
'  <link rel="shortcut icon" href="/">\n' +
'  <meta name="apple-mobile-web-app-title" content="t3kit">\n' +
'  <meta name="application-name" content="t3kit">\n' +
'  <meta name="msapplication-TileColor" content="#00aba9">\n' +
'  <meta name="msapplication-config" content="/">\n' +
'  <meta name="theme-color" content="#ffffff">\n' +
'\n' +
'  \n' +
'\n' +
'\n' +
'<link rel="canonical" href="http://t3kit10.t3.localhost/"/>\n' +
'</head>\n' +
'<body>\n' +
'\n' +
'<head>dddd</head><div id="top"></div><body><div id="top-header"></div><header class="header"><div class="skip-links"><a href="/#main-navigation" class="skip-links__item sr-only sr-only-focusable"></a><a href="/#main-content" class="skip-links__item sr-only sr-only-focusable"></a></div><!-- t3kit: Main menu [begin] --><nav id="main-navigation"\n' +
'      class="main-navigation js__main-navigation"><div class="main-navigation__items-wrp js__navigation__items-wrp"><ul class="main-navigation__items-list js__main-navigation__items-list "><li class="main-navigation__item js__main-navigation__item 4  "><a href="/page-layouts" title="Page layouts"\n' +
'                class="main-navigation__item-link js__main-navigation__item-link">Page layouts</a></li><li class="main-navigation__item js__main-navigation__item 5  "><a href="/content" title="Content"\n' +
'                class="main-navigation__item-link js__main-navigation__item-link">Content</a></li><li class="main-navigation__item js__main-navigation__item 6  "><a href="/examples" title="Examples"\n' +
'                class="main-navigation__item-link js__main-navigation__item-link">Examples</a></li><li class="main-navigation__item js__main-navigation__item 7  "><a href="https://t3kit.gitbook.io/doc/" title="Documentation"\n' +
'                class="main-navigation__item-link js__main-navigation__item-link">Documentation</a></li><li class="main-navigation__item js__main-navigation__item 8  "><a href="https://github.com/t3kit" title="Github"\n' +
'                class="main-navigation__item-link js__main-navigation__item-link">Github</a></li><li class="main-navigation__item js__main-navigation__item 9  "><a href="https://github.com/t3kit/.github/blob/master/SUPPORT.md" title="Support"\n' +
'                class="main-navigation__item-link js__main-navigation__item-link">Support</a></li></ul></div></nav><!-- t3kit: Main menu [end] --></header><!-- <script src="/typo3conf/ext/t3kit/Resources/Public/CSSee/t3kit.css"></script>\n' +
' --></body>\n' +
'\n' +
'<script src="/typo3temp/assets/js/301d3defed.js?1578648143"></script>\n' +
'\n' +
'\n' +
'</body>\n' +
'</html>\n' +
'<!-- Cached page generated 24-01-20 14:08. Expires 25-01-20 14:08 -->'

const handler = new DomHandler(function (error, dom) {
  if (error) {

  } else {
    // Parsing completed, do something
    console.log(dom)
  }
})

// const parser = new htmlparser2.Parser(
//   {
//     onopentag (name) {
//       if (name === 'script') {
//         console.log('JS! Hooray!')
//         console.log(name)
//       }
//     }
//   },
//   { decodeEntities: true }
// )
// parser.write(
//   '<script src="rrrrr"></script>'
// )
// parser.end()

const parser = new Parser(handler)
parser.write(rawHtml)
parser.end()
