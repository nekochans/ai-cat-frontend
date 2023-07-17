'use client';

import { fetchCatMessage } from '@/api/client/fetchCatMessage';
import { isCatId, type CatId } from '@/features';
import {
  useRef,
  useState,
  type FormEvent,
  type JSX,
  type KeyboardEvent,
} from 'react';
import { z } from 'zod';
import { ChatMessagesList, type ChatMessages } from './ChatMessagesList';

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

      try {
        const response = await fetch('/api/cats/streaming', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            catId: 'moko',
            userId,
            message,
          }),
        });

        const data = response.body;
        if (data === null) {
          throw new Error('後でちゃんとしたエラーを書く');
        }

        const reader = data.getReader();
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

            console.log(responseMessage);
          }

          await readStream();
        };

        await readStream();

        reader.releaseLock();

        const fetchCatMessageResponse = await fetchCatMessage({
          catId: 'moko',
          userId,
          message,
        });

        const newCatMessage = {
          role: 'cat',
          name: 'もこちゃん',
          message: fetchCatMessageResponse.message,
          avatarUrl:
            'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
        } as const;

        const newCatReplyContainedChatMessage = [
          ...newChatMessages,
          ...[newCatMessage],
        ];
        setChatMessages(newCatReplyContainedChatMessage);
      } catch (error) {
        // TODO 後でちゃんとしたエラー処理をする
        console.error(error);
      } finally {
        setIsLoading(false);
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
