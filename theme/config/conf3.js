const conf = module.exports = {}

conf.proxy = 'http://t3kit10.t3.localhost'

conf.SRC = 'src/'
conf.JS_SRC = `${conf.SRC}js/`

conf.DIST = 'dist/'
conf.JS_DIST = 'js/'
conf.CSS_DIST = 'css/'
conf.FONTS_DIST = 'fonts/'
conf.FAVICONS_DIST = 'favicons/'
conf.ICONS_DIST = 'icons/'

conf.DEV = `${conf.DIST}development/`
conf.PROD = `${conf.DIST}production/`

conf.JS_LINK = '<script src="{f:uri.resource(path:"js/%_file_%", extensionName: "{site.identifier}")}"></script>'
conf.CSS_LINK = '<link rel="stylesheet" type="text/css" href="{f:uri.resource(path:"css/%_file_%", extensionName: "{site.identifier}")}"></link>'
