import type { Meta, StoryObj } from '@storybook/react';
import { VoiceInputButton } from './VoiceInputButton';

const meta: Meta = {
  component: VoiceInputButton,
} satisfies Meta<typeof VoiceInputButton>;

export default meta;

type Story = StoryObj<typeof VoiceInputButton>;

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
