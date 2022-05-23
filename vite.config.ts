import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'sandbox'),
  publicDir: '/bionic-reading/',
});
