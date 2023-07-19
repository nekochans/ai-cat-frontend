'use client';

import { fetchCatMessage } from '@/api/client/fetchCatMessage';
import { TooManyRequestsError } from '@/api/errors';
import { InvalidResponseBodyError } from '@/errors';
import { isCatId, type CatId } from '@/features';
import {
  useRef,
  useState,
  type FormEvent,
  type JSX,
  type KeyboardEvent,
} from 'react';
import { z } from 'zod';
import { ChatErrorMessage, type ErrorType } from './ChatErrorMessage';
import { ChatMessagesList, type ChatMessages } from './ChatMessagesList';
import { StreamingCatMessage } from './StreamingCatMessage';

export type Props = {
  userId: string;
  initChatMessages: ChatMessages;
};

const fetchCatMessageResponseSchema = z.object({
  requestId: z.string().min(36).max(36),
  userId: z.string().min(36).max(36),
  catId: z.string().refine((value) => isCatId(value)),
  message: z.string().min(1),
});

type FetchCatMessageResponse = {
  requestId: string;
  userId: string;
  catId: CatId;
  message: string;
};

const isFetchCatMessageResponse = (
  value: unknown,
): value is FetchCatMessageResponse => {
  return fetchCatMessageResponseSchema.safeParse(value).success;
};

export const ChatContent = ({
  userId,
  initChatMessages,
}: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const [chatMessages, setChatMessages] =
    useState<ChatMessages>(initChatMessages);

  const [streamingMessage, setStreamingMessage] = useState<string>('');

  const [errorType, setErrorType] = useState<ErrorType | string>('');

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    if (ref.current?.value != null && ref.current?.value !== '') {
      const message = ref.current.value;

      ref.current.value = '';

      const newUserMessage = {
        role: 'user',
        name: 'User',
        message,
        avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
      } as const;
      const newChatMessages = [...chatMessages, ...[newUserMessage]];

      setChatMessages(newChatMessages);

      setIsLoading(true);
      setErrorType('');

      let newResponseMessage = '';

      try {
        const response = await fetchCatMessage({
          catId: 'moko',
          userId,
          message,
        });

        const body = response.body;
        if (body === null) {
          throw new InvalidResponseBodyError(
            'src/app/chat/_components/ChatContent/ChatContent.tsx handleSubmit',
          );
        }

        const reader = body.getReader();
        const decoder = new TextDecoder();

        const readStream = async (): Promise<undefined> => {
          const { done, value } = await reader.read();
          if (done) {
            return;
          }

          const objects = decoder
            .decode(value)
            .split('\n\n')
            .map((line) => {
              const jsonString = line.trim().split('data: ')[1];
              try {
                const parsedJson = JSON.parse(jsonString) as unknown;

                return isFetchCatMessageResponse(parsedJson)
                  ? parsedJson
                  : null;
              } catch {
                return null;
              }
            })
            .filter(Boolean) as FetchCatMessageResponse[];

          for (const object of objects) {
            const responseMessage = object.message ?? '';

            newResponseMessage += responseMessage;
            setStreamingMessage(newResponseMessage);
          }

          await readStream();
        };

        await readStream();

        reader.releaseLock();

        const newCatMessage = {
          role: 'cat',
          name: 'もこちゃん',
          message: newResponseMessage,
          avatarUrl:
            'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
        } as const;

        const newCatReplyContainedChatMessage = [
          ...newChatMessages,
          ...[newCatMessage],
        ];
        setChatMessages(newCatReplyContainedChatMessage);
      } catch (error) {
        if (error instanceof TooManyRequestsError) {
          setErrorType('TOO_MANY_REQUESTS');

          return;
        }

        setErrorType('INTERNAL_SERVER_ERROR');
      } finally {
        setIsLoading(false);
        newResponseMessage = '';
        setStreamingMessage('');
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (isLoading) {
      return;
    }

    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      const submitEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
      });
      event.currentTarget.form?.dispatchEvent(submitEvent);
      event.preventDefault();
    }
  };

  const submitButtonBgColor = isLoading ? 'bg-orange-300' : 'bg-orange-500';

  const submitButtonHoverColor = isLoading
    ? 'hover:bg-orange-200'
    : 'hover:bg-orange-400';

  return (
    <>
      <ChatMessagesList chatMessages={chatMessages} isLoading={isLoading} />
      {streamingMessage !== '' ? (
        <StreamingCatMessage
          name="もこちゃん"
          avatarUrl="https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp"
          message={streamingMessage}
        />
      ) : (
        ''
      )}
      {errorType !== '' ? <ChatErrorMessage type={errorType} /> : ''}
      <div className="mb-2 border-t-2 border-amber-200 bg-yellow-100 px-4 pt-4 sm:mb-0">
        <form
          id="send-message"
          method="post"
          action=""
          onSubmit={handleSubmit}
          aria-label="send to message"
        >
          <div className="relative flex">
            <textarea
              id="message-input"
              name="message-input"
              placeholder="Type your message here. Press Command + Enter or Control + Enter to send."
              className="w-full rounded-md py-3 pl-4 text-gray-600 placeholder:text-gray-600  focus:outline-none focus:placeholder:text-gray-400"
              ref={ref}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="mt-1 flex flex-row-reverse">
            <button
              type="submit"
              className={`${submitButtonBgColor} ${submitButtonHoverColor} rounded-md px-4 py-3.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
