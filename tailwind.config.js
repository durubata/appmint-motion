const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: {
    enabled: false, // Disable PurgeCSS
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwindcss-rtl'),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
