import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import pkg from 'svelte-preprocess';
const { scss } = pkg;

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    scss(),
    pkg({
      postcss: true
    })
  ]
};
