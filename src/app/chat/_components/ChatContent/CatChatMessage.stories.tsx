import type { Meta, StoryObj } from '@storybook/react';
import { CatChatMessage } from './CatChatMessage';

const meta: Meta = {
  component: CatChatMessage,
} satisfies Meta<typeof CatChatMessage>;

export default meta;

type Story = StoryObj<typeof CatChatMessage>;

export const Default: Story = {
  args: {
    name: 'おもち',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/06/19/13/f8499011-3fab-4dc1-b40e-691162791eae.webp',
    message: 'はじめまして！「おもち」だにゃん🐱よろしくにゃ🐱',
  },
};
