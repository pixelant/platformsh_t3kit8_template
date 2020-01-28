const conf = module.exports = {}

conf.proxy = 'http://t3kit10.t3.localhost'

conf.DIST = 'dist/'
conf.SRC = 'src/'
conf.JS_DIST = `${conf.DIST}js/`
conf.CSS_DIST = `${conf.DIST}css/`
conf.FONTS_DIST = `${conf.DIST}fonts/`
conf.FAVICONS_DIST = `${conf.DIST}favicons/`
conf.ICONS_DIST = `${conf.DIST}icons/`
conf.JS_SRC = `${conf.SRC}js/`
conf.DEV = 'development/'
conf.PROD = 'production/'

conf.JS_LINK = '<script src="{f:uri.resource(path:"js/%_file_%", extensionName: "{site.identifier}")}"></script>'
