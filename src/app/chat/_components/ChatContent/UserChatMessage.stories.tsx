import type { Meta, StoryObj } from '@storybook/react';
import { UserChatMessage } from './UserChatMessage';

const meta: Meta = {
  component: UserChatMessage,
};

export default meta;

type Story = StoryObj<typeof UserChatMessage>;

export const Default: Story = {
  args: {
    name: 'Keita',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
    message: 'こんにちは！お話しよう🐱',
  },
};
