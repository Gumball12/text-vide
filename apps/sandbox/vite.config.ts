import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
  base: '/text-vide/',
  plugins: [
    Unocss({
      presets: [presetWind()],
      shortcuts: {
        'section-name': 'text-sm text-neutral-600',
        'transition-shadow-300': 'transition-shadow duration-300',
        'rendered-box':
          'w-full min-h-24 max-h-48 rounded bg-light-200 p-2 text-lg shadow-md hover:shadow-lg transition-shadow-300 overflow-y-scroll',
      },
    }),
    react(),
  ],
});
