import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': resolve(__dirname, './src/api'),
      '@components': resolve(__dirname, './src/components'),
      '@constants': resolve(__dirname, './src/constants'),
      '@data': resolve(__dirname, './src/data'),
      '@pages': resolve(__dirname, './src/pages'),
      '@store': resolve(__dirname, './src/store'),
      '@styles': resolve(__dirname, './src/styles'),
      '@type': resolve(__dirname, './src/types'),
      '@utils': resolve(__dirname, './src/utils'),
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    cors: false,
    proxy: {},
  },
});
