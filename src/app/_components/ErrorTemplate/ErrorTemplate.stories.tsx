import type { Meta, StoryObj } from '@storybook/react';
import { ErrorTemplate } from './ErrorTemplate';

const meta: Meta = {
  component: ErrorTemplate,
};

export default meta;

type Story = StoryObj<typeof ErrorTemplate>;

const TestComponent = (): JSX.Element => {
  return (
    <ul>
      <li className="mt-2 text-sm leading-6 text-gray-600">テスト1</li>
      <li className="mt-2 text-sm leading-6 text-gray-600">テスト2</li>
      <li className="mt-2 text-sm leading-6 text-gray-600">テスト3</li>
    </ul>
  );
};

export const DefaultNotFound: Story = {
  args: {
    errorCode: 404,
  },
};

export const NotFoundWithChildren: Story = {
  args: {
    errorCode: 404,
    children: <TestComponent />,
  },
};

export const DefaultInternalServerError = {
  args: {
    errorCode: 500,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    resetFunc: () => {
      console.log('reset error');
    },
  },
};

export const InternalServerErrorWithChildren = {
  args: {
    errorCode: 500,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    resetFunc: () => {
      console.log('reset error');
    },
    children: <TestComponent />,
  },
};
