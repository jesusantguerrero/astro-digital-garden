// vite.config.js
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'astro-remark-digital-garden',
      fileName: (format) => `astro-remark-digital-garden.${format}.js`
    },
  }
});