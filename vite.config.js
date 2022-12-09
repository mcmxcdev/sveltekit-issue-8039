import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['@fortawesome/*'],
  },
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
    fs: {
      allow: ['..'],
    },
  },
};

export default config;
