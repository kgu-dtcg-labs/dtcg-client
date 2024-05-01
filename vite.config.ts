import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': resolve(__dirname, './src/api'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@constants': resolve(__dirname, './src/constants'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@mocks': resolve(__dirname, './src/mocks'),
      '@pages': resolve(__dirname, './src/pages'),
      '@router': resolve(__dirname, './src/router'),
      '@store': resolve(__dirname, './src/store'),
      '@styles': resolve(__dirname, './src/styles'),
      '@type': resolve(__dirname, './src/types'),
      '@utils': resolve(__dirname, './src/utils'),
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    cors: false,
    proxy: {
      '/api': {
        target: 'http://seven.acryl.ai:39500/ner',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      },
      '/save': {
        target:
          'http://ec2-52-78-74-89.ap-northeast-2.compute.amazonaws.com:9999/save_scenarios',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/save/, ''),
        secure: false,
      },
    },
  },
});
