
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

  // import bootstrap components
  {
    external: ['jquery'],
    input: [
      'src/js/main.js',
      'src/index.js'
    ],
    // chunkGroupingSize: 0,
    output: [
      {
        dir: 'dist',
        format: 'iife',
        // file: 'dist/eee.js',
        // sourcemap: true,
        assetFileNames: '[name].js',
        entryFileNames: '[name]-[hash].js',
        // chunkFileNames: '[name]-[hash].js',
        // assetFileNames: 'dist/[name]-[hash].[ext]',
        plugins: [
          // terser()
        ],
        globals: {
          jquery: 'jQuery'
        }
      }
    ],
    plugins: [
      resolve()
      // static_files({
      //   include: ['dest/']
      // })
      // html({
      //   fileName: 'mainjs.html',
      //   publicPath: 'dist',
      //   template: (attributes, bundle, files, publicPath, title) => ''
      // }),
      // html({
      //   template: 'test.html'
      // })
      // del({ targets: 'dist/*' })
      // sizes(),
      // gzipPlugin(),
      // brotli()
      // sizes(),
      // bundleSize(),
      // filesize(),
      // htmlTemplate({
      //   template: 'test.html',
      //   target: 'index.html'
      // })
      // html({
      //   template: 'test.html',
      //   // dest: 'dist',
      //   filename: 'index.html',
      //   inject: 'html'
      // })
    ]
  }
  // {
  //   input: 'bootstrap.js',
  //   output: [
  //     {
  //       file: 'dist/bootstrap.js',
  //       format: 'iife',
  //       globals: {
  //         jquery: 'jQuery',
  //         'popper.js': 'Popper'
  //       }
  //     }
  //   ],
  //   external: ['jquery', 'popper.js']
  // }
]
