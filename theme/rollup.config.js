// rollup.config.js
import devConfig from './rollup.dev.config.js'
import prodConfig from './rollup.prod.config.js'

export default commandLineArgs => {
  if (commandLineArgs.dev === true) {
    return devConfig
  }
  return prodConfig
}
