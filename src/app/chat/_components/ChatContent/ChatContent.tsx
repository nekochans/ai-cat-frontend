'use client';

import { fetchCatMessage } from '@/api/client/fetchCatMessage';
import {
  useRef,
  useState,
  type FormEvent,
  type JSX,
  type KeyboardEvent,
} from 'react';
import { ChatMessagesList, type ChatMessages } from './ChatMessagesList';

export type Props = {
  userId: string;
  initChatMessages: ChatMessages;
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
        const fetchCatMessageResponse = await fetchCatMessage({
          catName: 'moko',
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

    if (event.shiftKey && event.key === 'Enter') {
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
              placeholder="Type your message here. Press Enter + Shift to send."
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
