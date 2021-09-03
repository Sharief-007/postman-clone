module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "HttpClient",
        target: 'portable'
      },
    },
  },
}
