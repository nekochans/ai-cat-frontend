import type { ChatErrorType } from '@/features/chat';
import { ExhaustiveError } from '@/utils';
import Image from 'next/image';

type Props = {
  type: ChatErrorType;
};

function getErrorMessage(type: ChatErrorType) {
  switch (type) {
    case 'TOO_MANY_REQUESTS':
      return 'Too many requests from this IP. Please try again after some time😿';
    case 'INTERNAL_SERVER_ERROR':
      return 'Sorry, An unexpected error has occurred. Please try after a while😿';
    default:
      throw new ExhaustiveError();
  }
}

export function ChatErrorMessage({ type }: Props): JSX.Element {
  return (
    <div id="streaming-cat-message" className="flex flex-col space-y-4 p-3">
      <div className="flex items-end">
        <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
          <div>
            <span className="inline-block rounded-lg rounded-bl-none bg-red-50 px-4 py-2">
              <p className="font-bold text-red-800">{getErrorMessage(type)}</p>
            </span>
          </div>
        </div>
        <Image
          src="/black-cat.webp"
          width={330}
          height={400}
          alt="Crying Black Cat"
          className="size-10 rounded-full sm:size-16"
        />
      </div>
    </div>
  );
}
