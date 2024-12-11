const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.xy-divide': {
          position: 'relative',
          '&::before, &::after': {
            content: "''",
            '@apply absolute bg-gray-300': {},
          },
          '&::before': {
            '@apply w-0.5 top-0 bottom-0 -left-[1px] right-0 mx-auto': {},
          },
          '&::after': {
            '@apply h-0.5 -top-[1px] bottom-0 left-0 right-0 my-auto': {},
          },
        },
      });
    }),
  ],
};
