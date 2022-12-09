import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

const extensions = ['.svelte', '.svx'];

const preprocess = [
  sveltePreprocess({
    postcss: true,
    preserve: ['ld+json'],
  }),
  mdsvex({ extensions: extensions }),
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: extensions,
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: preprocess,
  kit: {
    adapter: adapter({
      split: false,
      edge: false,
    }),
  },
};

export default config;
