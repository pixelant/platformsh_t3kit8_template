
import resolve from '@rollup/plugin-node-resolve'
const conf = require('./conf')

const DIR = conf.DEV

export default [
  {
    input: `${conf.JS_SRC}jquery.js`,
    plugins: [
      resolve()
    ],
    output: [
      {
        file: `${DIR}${conf.JS_DIST}jquery.js`,
        format: 'iife'
      }
    ],
    context: 'window'
  },
  {
    external: ['jquery'],
    input: `${conf.JS_SRC}main.js`,
    plugins: [
      resolve()
    ],
    output: {
      file: `${DIR}${conf.JS_DIST}main.js`,
      format: 'iife',
      sourcemap: true,
      globals: {
        jquery: 'jQuery'
      }
    },
    watch: {
      clearScreen: false
    }
  },
  {
    external: ['jquery'],
    input: `${conf.JS_SRC}plugin1.js`,
    plugins: [
      resolve()
    ],
    output: {
      file: `${DIR}${conf.JS_DIST}plugin1.js`,
      format: 'iife',
      sourcemap: true,
      globals: {
        jquery: 'jQuery'
      }
    }
  },
  {
    external: ['jquery'],
    input: `${conf.JS_SRC}plugin2.js`,
    plugins: [
      resolve()
    ],
    output: {
      file: `${DIR}${conf.JS_DIST}plugin2.js`,
      format: 'iife',
      sourcemap: true,
      globals: {
        jquery: 'jQuery'
      }
    }
  }
]
