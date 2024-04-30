const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/**/**/*.spec.*',
    baseUrl: 'https://rich-text-editor.squarespace.net/?path=/story/',
  },
})
