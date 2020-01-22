
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: 'src/js/jquery.js',
    output: [
      {
        file: 'dist/jquery.js',
        format: 'iife'
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
      resolve()
    ],
    output: {
      dir: 'dist',
      format: 'iife',
      entryFileNames: '[name].js',
      sourcemap: true,
      globals: {
        jquery: 'jQuery'
      }
    }
  },
  {
    external: ['jquery'],
    input: [
      'src/js/plugins'
    ],
    plugins: [
      resolve()
    ],
    output: {
      dir: 'dist',
      format: 'iife',
      entryFileNames: '[name].js',
      sourcemap: true,
      globals: {
        jquery: 'jQuery'
      }
    }
  }
]
