import type { Meta, StoryObj } from '@storybook/react';
import { CatLoadingMessage } from './CatLoadingMessage';

const meta: Meta = {
  component: CatLoadingMessage,
} satisfies Meta<typeof CatLoadingMessage>;

export default meta;

type Story = StoryObj<typeof CatLoadingMessage>;

export const Default: Story = {
  args: {
    name: 'おもち',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/06/19/13/f8499011-3fab-4dc1-b40e-691162791eae.webp',
  },
};
