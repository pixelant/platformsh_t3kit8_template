const { parallel } = require('gulp')
const rollup = require('rollup')
const { terser } = require('rollup-plugin-terser')
const resolve = require('@rollup/plugin-node-resolve')
const conf = require('../../conf2')

const SRC = conf.JS_SRC
const DIST = `${conf.DIST}${conf.JS_DIST}`

// compile jQuery
const jQueryInputOptions = {
  external: ['jquery'],
  input: `${SRC}jquery.js`,
  context: 'window',
  plugins: [
    resolve()
  ]
}
process.env.NODE_ENV === 'production' && jQueryInputOptions.plugins.push(terser({
  output: {
    comments: false
  }
}))
const jQueryOutputOptions = {
  file: `${DIST}jquery.js`,
  format: 'iife'
}
async function compilejQuery () {
  const bundle = await rollup.rollup(jQueryInputOptions)
  await bundle.write(jQueryOutputOptions)
}

// compile mainjs
const mainJsInputOptions = {
  external: ['jquery'],
  input: `${SRC}main.js`,
  plugins: [
    resolve()
  ]
}
process.env.NODE_ENV === 'production' && mainJsInputOptions.plugins.push(terser({
  output: {
    comments: false
  }
}))
const mainJsOutputOptions = {
  file: `${DIST}main.js`,
  format: 'iife',
  sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
  globals: {
    jquery: 'jQuery'
  }
}
async function compileMainJs () {
  const bundle = await rollup.rollup(mainJsInputOptions)
  await bundle.write(mainJsOutputOptions)
}

// compile plugin1
const plugin1InputOptions = {
  external: ['jquery'],
  input: `${SRC}plugin1.js`,
  plugins: [
    resolve()
  ]
}
process.env.NODE_ENV === 'production' && plugin1InputOptions.plugins.push(terser({
  output: {
    comments: false
  }
}))
const plugin1OutputOptions = {
  file: `${DIST}plugin1.js`,
  format: 'iife',
  sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
  globals: {
    jquery: 'jQuery'
  }
}
async function compilePlugin1 () {
  const bundle = await rollup.rollup(plugin1InputOptions)
  await bundle.write(plugin1OutputOptions)
}

// compile plugin2
const plugin2InputOptions = {
  external: ['jquery'],
  input: `${SRC}plugin2.js`,
  plugins: [
    resolve()
  ]
}
process.env.NODE_ENV === 'production' && plugin2InputOptions.plugins.push(terser({
  output: {
    comments: false
  }
}))
const plugin2OutputOptions = {
  file: `${DIST}plugin2.js`,
  format: 'iife',
  sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
  globals: {
    jquery: 'jQuery'
  }
}
async function compilePlugin2 () {
  const bundle = await rollup.rollup(plugin2InputOptions)
  await bundle.write(plugin2OutputOptions)
}

exports.compileJs = parallel(compilejQuery, compileMainJs, compilePlugin1, compilePlugin2)
