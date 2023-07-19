import type { Meta, StoryObj } from '@storybook/react';
import { ChatErrorMessage } from './ChatErrorMessage';

const meta: Meta = {
  component: ChatErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ChatErrorMessage>;

export const ShowTooManyRequests: Story = {
  args: {
    type: 'TOO_MANY_REQUESTS',
  },
};

export const ShowInternalServerError: Story = {
  args: {
    type: 'INTERNAL_SERVER_ERROR',
  },
};
