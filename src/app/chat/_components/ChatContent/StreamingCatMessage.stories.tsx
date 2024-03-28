import type { Meta, StoryObj } from '@storybook/react';
import { StreamingCatMessage } from './StreamingCatMessage';

const meta: Meta = {
  component: StreamingCatMessage,
} satisfies Meta<typeof StreamingCatMessage>;

export default meta;

type Story = StoryObj<typeof StreamingCatMessage>;

export const Default: Story = {
  args: {
    name: 'おもち',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/06/19/13/f8499011-3fab-4dc1-b40e-691162791eae.webp',
    message: 'はじめまして！「おもち」だにゃん🐱よろし',
  },
};
