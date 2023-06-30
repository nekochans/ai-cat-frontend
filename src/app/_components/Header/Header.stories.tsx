import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    enableLoginLink: true,
  },
};

export const WithoutEnableLoginLink: Story = {
  args: {
    enableLoginLink: false,
  },
};
