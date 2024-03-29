import type { Meta, StoryObj } from '@storybook/react';
import { ChatHeader } from './ChatHeader';

const meta: Meta = {
  component: ChatHeader,
} satisfies Meta<typeof ChatHeader>;

export default meta;

type Story = StoryObj<typeof ChatHeader>;

export const Default: Story = {};
