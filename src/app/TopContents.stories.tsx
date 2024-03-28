import type { Meta, StoryObj } from '@storybook/react';
import { TopContents } from './TopContents';

const meta: Meta = {
  component: TopContents,
} satisfies Meta<typeof TopContents>;

export default meta;

type Story = StoryObj<typeof TopContents>;

export const Default: Story = {};
