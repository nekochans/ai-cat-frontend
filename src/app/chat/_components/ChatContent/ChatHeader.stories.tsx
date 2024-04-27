import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { ChatHeader } from './ChatHeader';

const meta: Meta = {
  component: ChatHeader,
} satisfies Meta<typeof ChatHeader>;

export default meta;

type Story = StoryObj<typeof ChatHeader>;

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
