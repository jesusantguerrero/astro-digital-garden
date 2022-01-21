// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src/index.js'),
      name: 'astro-remark-digital-garden',
      fileName: (format) => `index.${format}.js`
    },
  }
});