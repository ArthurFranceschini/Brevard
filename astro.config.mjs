// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  devToolbar:{
    enabled: false,
},

integrations: [
    alpinejs()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});