const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      customFileProtocol: './',
      // nodeIntegration: true,
      externals: ['ffi-napi', 'ref-napi'],
      builderOptions: {
        extraResources: {
          from: 'resources/',
          to: './'
        }
      }
    }
  }
})
