
import resolve from '@rollup/plugin-node-resolve'

const isProduction = process.env.NODE_ENV === 'production'

export default (async () => ([
  {
    input: 'src/js/jquery.js',
    plugins: [
      isProduction && (await import('rollup-plugin-terser')).terser()
    ],
    output: [
      {
        // dir: 'dist',
        // entryFileNames: '[name]-[hash].js',
        file: 'dist/jquery.js',
        format: 'iife'
      }
    ],
    context: 'window'
  },

  // import bootstrap components
  {
    external: ['jquery'],
    input: [
      'src/js/main.js'
    ],
    plugins: [
      resolve(),
      isProduction && (await import('rollup-plugin-terser')).terser()
    ],
    output: {
      dir: 'dist',
      format: 'iife',
      // file: 'dist/main.js',
      // entryFileNames: '[name].js',
      // entryFileNames: '[name]-[hash].js',
      entryFileNames: () => {
        if (isProduction) {
          return `[name]-[hash].js`
        } else {
          return `[name].js`
        }
      },
      // sourcemap: function () {
      //   if (isProduction) {
      //     return 'hidden'
      //   } else {
      //     return 'inline'
      //   }
      // },
      // sourcemap: 'hidden',
      // sourcemapPathTranform: (file) => {
      //   return `8${file}`
      // },
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
      resolve(),
      isProduction && (await import('rollup-plugin-terser')).terser()
    ],
    output: {
      // dir: 'dist',
      format: 'iife',
      file: 'dist/plugins.js',
      // sourcemap: true,
      // assetFileNames: '[name].js',
      // entryFileNames: '[name]-[hash].js',
      // chunkFileNames: '[name]-[hash].js',
      // assetFileNames: 'dist/[name]-[hash].[ext]',
      globals: {
        jquery: 'jQuery'
      }
    }
  }
]))()
