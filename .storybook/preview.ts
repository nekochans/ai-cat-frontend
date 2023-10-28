import '../src/app/globals.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';

// TODO msw-storybook-addon がまだ対応していないので対応したら修正する
// import { initialize, mswDecorator } from 'msw-storybook-addon';
//
// initialize();
//
// export const decorators = [mswDecorator];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
