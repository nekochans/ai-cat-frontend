import antfu from '@antfu/eslint-config';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier'
    },
    stylistic: {
      semi: true,
    },
    typescript: {
      overrides: {
        'ts/consistent-type-definitions': ['error', 'type'],
      },
    },
    ignores: [
      '**/node_modules/',
      '**/.next/',
      '**/build/',
      '**/coverage/',
      '**/.eslintrc.json',
      '**/next-env.d.ts',
      '**/*.config.js',
      '**/storybook-static/',
      'public/mockServiceWorker.js',
      '**/vitest.config.mts',
      '**/vitest.setup.mts',
      'next.config.mjs',
      'eslint.config.mjs',
    ],
  },
  ...tailwindcss.configs['flat/recommended'],
);
