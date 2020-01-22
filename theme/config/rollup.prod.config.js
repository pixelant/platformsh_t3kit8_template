
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
const conf = require('./conf')

export default [
  {
    input: `${conf.JS_SRC}jquery.js`,
    plugins: [
      resolve(),
      terser({
        output: {
          comments: false
        }
      })
    ],
    output: [
      {
        file: `${conf.JS_DIST}jquery.js`,
        format: 'iife'
      }
    ],
    context: 'window'
  },
  {
    external: ['jquery'],
    input: `${conf.JS_SRC}main.js`,
    plugins: [
      resolve(),
      terser({
        output: {
          comments: false
        }
      })
    ],
    output: {
      file: `${conf.JS_DIST}main.js`,
      format: 'iife',
      sourcemap: 'hidden',
      globals: {
        jquery: 'jQuery'
      }
    }
  },
  {
    external: ['jquery'],
    input: `${conf.JS_SRC}plugin1.js`,
    plugins: [
      resolve(),
      terser({
        output: {
          comments: false
        }
      })
    ],
    output: {
      file: `${conf.JS_DIST}plugin1.js`,
      format: 'iife',
      sourcemap: 'hidden',
      globals: {
        jquery: 'jQuery'
      }
    }
  },
  {
    external: ['jquery'],
    input: `${conf.JS_SRC}plugin2.js`,
    plugins: [
      resolve(),
      terser({
        output: {
          comments: false
        }
      })
    ],
    output: {
      file: `${conf.JS_DIST}plugin2.js`,
      format: 'iife',
      sourcemap: 'hidden',
      globals: {
        jquery: 'jQuery'
      }
    }
  }
]
