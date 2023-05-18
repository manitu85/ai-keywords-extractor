/* eslint-disable unicorn/prefer-module */
/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@App', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@Elements', replacement: path.resolve(__dirname, 'src/components/_Elements') }
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
