const conf = module.exports = {}

conf.CWD = process.env.INIT_CWD
console.log('TCL: conf.CWD', conf.CWD)

conf.SRC = `${conf.CWD}/src/`
conf.JS_SRC = `${conf.SRC}js/`
conf.CSS_SRC = `${conf.SRC}styles/`

conf.DIST_ROOT = `${conf.CWD}/dist/`
if (process.env.NODE_ENV === 'production') {
  conf.DIST = `${conf.DIST_ROOT}production/`
} else {
  conf.DIST = `${conf.DIST_ROOT}development/`
}

conf.JS_DIST = 'js/'
conf.CSS_DIST = 'css/'
conf.FONTS_DIST = 'fonts/'
conf.FAVICONS_DIST = 'favicons/'
conf.ICONS_DIST = 'icons/'

conf.proxy = 'http://t3kit10.t3.localhost'
conf.JS_LINK = '<script src="{f:uri.resource(path:"js/%_file_%", extensionName: "{site.identifier}")}"></script>'
conf.CSS_LINK = '<link rel="stylesheet" type="text/css" href="{f:uri.resource(path:"css/%_file_%", extensionName: "{site.identifier}")}"></link>'
