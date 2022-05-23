import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  test: {
    coverage: {
      reporter: ['text', 'lcov', 'html'],
    },
  },
});
