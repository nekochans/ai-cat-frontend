import type { Meta, StoryObj } from '@storybook/react';
import { ChatContentLayout } from './ChatContentLayout';

const meta: Meta = {
  component: ChatContentLayout,
} satisfies Meta<typeof ChatContentLayout>;

export default meta;

type Story = StoryObj<typeof ChatContentLayout>;

export const Default: Story = {
  args: {
    children: <div>ここが子要素🐱</div>,
  },
};
