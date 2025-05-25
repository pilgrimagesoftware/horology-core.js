const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'horology-core',
      fileName: (format) => `horology-core.${format}.js`
    }
  }
});
