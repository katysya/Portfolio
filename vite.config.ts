import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import sass from 'sass';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './app'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        api: 'modern-compiler',
        additionalData: `@use "@app/styles/_variables.scss" as *;`,
      },
    },
  },
  plugins: [react()],
});
