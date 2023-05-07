/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@elements', replacement: path.resolve(__dirname, 'src/components/Elements') }
    ]
  },
  server: {
    open: true,
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  plugins: [react(), svgrPlugin({ exportAsDefault: true })]
});
