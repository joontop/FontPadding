var path = require('path')
var version = require('./package.json').version

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'font-padding.js'
  }
}

module.exports = (env, argv) => {
  var isProduction = argv.mode === 'production'

  config.output.filename = 'font-padding.' + version + (isProduction ? '.prod' : '.dev') + '.js'

  return config
}