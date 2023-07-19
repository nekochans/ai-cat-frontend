import type { Meta, StoryObj } from '@storybook/react';
import { StreamingCatMessage } from './StreamingCatMessage';

const meta: Meta = {
  component: StreamingCatMessage,
};

export default meta;

type Story = StoryObj<typeof StreamingCatMessage>;

export const Default: Story = {
  args: {
    catName: 'おもち',
    catAvatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/06/19/13/f8499011-3fab-4dc1-b40e-691162791eae.webp',
    streamingMessage: 'はじめまして！「おもち」だにゃん🐱よろし',
  },
};
