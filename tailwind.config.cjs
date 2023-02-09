const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(20rem, 1fr))'
      },
      gridAutoRows: {
        '1fr-full': '1fr'
      }
    }
  },

  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
};

module.exports = config;
