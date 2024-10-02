import type { Meta, StoryObj } from '@storybook/react';
import { UserVoiceInputButton } from './UserVoiceInputButton';

const meta: Meta = {
  component: UserVoiceInputButton,
} satisfies Meta<typeof UserVoiceInputButton>;

export default meta;

type Story = StoryObj<typeof UserVoiceInputButton>;

export const Default: Story = {
  args: {
    recording: false,
  },
};

export const IsRecording: Story = {
  args: {
    recording: true,
  },
};
