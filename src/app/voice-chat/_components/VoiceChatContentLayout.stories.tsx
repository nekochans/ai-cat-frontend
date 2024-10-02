import type { Meta, StoryObj } from '@storybook/react';
import { VoiceChatContentLayout } from './VoiceChatContentLayout';

const meta: Meta = {
  component: VoiceChatContentLayout,
} satisfies Meta<typeof VoiceChatContentLayout>;

export default meta;

type Story = StoryObj<typeof VoiceChatContentLayout>;

export const Default: Story = {
  args: {
    children: <div>ここが子要素🐱</div>,
  },
};
