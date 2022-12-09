module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteStrictMode: true,
  svelteAllowShorthand: true,
  plugins: [
    require('prettier-plugin-svelte'),
    require('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: ['.'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
