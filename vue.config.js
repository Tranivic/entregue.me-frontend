const path = require("path");
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },

  //Responsable config for auto importa variables into vue components
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/scss/setup/_variables.scss"; @import "~@/scss/setup/_mixins.scss";'
      }
    }
  }
};