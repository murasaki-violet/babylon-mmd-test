// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/your-repo-name/', // GitHub Pages のリポジトリ名に合わせて設定
  build: {
    outDir: 'dist'
  }
});