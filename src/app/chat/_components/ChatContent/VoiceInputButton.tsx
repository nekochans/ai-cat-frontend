import { Button } from '@headlessui/react';
import type { ComponentProps, JSX } from 'react';

type Props = ComponentProps<'button'>;

export const VoiceInputButton = ({ onClick }: Props): JSX.Element => {
  return (
    <Button
      type="button"
      className="inline-flex size-12 items-center justify-center rounded-full text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
      onClick={onClick}
      aria-label="voice input"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="size-6 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        ></path>
      </svg>
    </Button>
  );
};
