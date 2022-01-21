// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve('src/index.js'),
      name: 'astro-remark-digital-garden',
      fileName: (format) => `index.${format}.js`
    },
  },
  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ['vue'],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        vue: 'Vue'
      }
    }
  }
});