import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { VoiceChatHeader } from './VoiceChatHeader';

const meta: Meta = {
  component: VoiceChatHeader,
} satisfies Meta<typeof VoiceChatHeader>;

export default meta;

type Story = StoryObj<typeof VoiceChatHeader>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const expectedCatName = 'もこちゃん';
    const expectedCatType = 'チンチラシルバー';

    const canvas = within(canvasElement);
    const header = canvas.getByRole('img', { name: expectedCatName });
    await expect(header).toHaveAttribute('alt', expectedCatName);

    await expect(canvas.getByText(expectedCatName)).toBeInTheDocument();
    await expect(canvas.getByText(expectedCatType)).toBeInTheDocument();
  },
};
