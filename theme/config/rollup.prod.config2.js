import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import * as getVar from './var'
// import YAML from 'yaml'
// const fs = require('fs')
const path = require('path')

// const project = fs.readFileSync(path.resolve(__dirname, '../project.yaml'), 'utf8')
// const projectConf = YAML.parse(project)
// console.log('TCL: projectConf', projectConf)

// function renderConfig () {
//   projectConf.js.additional_page_entry.forEach(element => {
//     console.log('TCL: renderConfig -> element', element)
//     return {
//       external: ['jquery'],
//       input: getVar.JS_SRC + element,
//       plugins: [
//         resolve(),
//         terser({
//           output: {
//             comments: false
//           }
//         })
//       ],
//       output: {
//         file: path.resolve(__dirname, getVar.JS_DIST),
//         format: 'iife',
//         sourcemap: 'hidden',
//         globals: {
//           jquery: 'jQuery'
//         }
//       }
//     }
//   })
// }

// renderConfig()

export default [
  {
    input: 'src/js/jquery.js',
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
        dir: DIST,
        format: 'iife',
        entryFileNames: '[name].js'
      }
    ],
    context: 'window'
  },

  {
    external: ['jquery'],
    input: [
      'src/js/main'
    ],
    plugins: [
      resolve(),
      terser({
        output: {
          comments: false
        }
      })
    ],
    output: {
      dir: DIST,
      format: 'iife',
      entryFileNames: '[name].js',
      sourcemap: 'hidden',
      globals: {
        jquery: 'jQuery'
      }
    }
  },
  {
    external: ['jquery'],
    input: [
      'src/js/plugin1'
    ],
    plugins: [
      resolve(),
      terser({
        output: {
          comments: false
        }
      })
    ],
    output: {
      dir: DIST,
      format: 'iife',
      entryFileNames: '[name].js',
      sourcemap: 'hidden',
      globals: {
        jquery: 'jQuery'
      }
    }
  },
  {
    external: ['jquery'],
    input: [
      'src/js/plugin2'
    ],
    plugins: [
      resolve(),
      terser({
        output: {
          comments: false
        }
      })
    ],
    output: {
      dir: DIST,
      format: 'iife',
      entryFileNames: '[name].js',
      sourcemap: 'hidden',
      globals: {
        jquery: 'jQuery'
      }
    }
  }
]
