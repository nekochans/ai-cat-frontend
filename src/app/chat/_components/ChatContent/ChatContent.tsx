'use client';

import { generateCatMessage } from '@/api/client/generateCatMessage';
import { TooManyRequestsError } from '@/api/errors';
import { InvalidResponseBodyError } from '@/errors';
import {
  isGenerateCatMessageResponse,
  type GenerateCatMessageResponse,
} from '@/features';
import { type ChatMessage, type ChatMessages } from '@/features/chat';
import {
  useDeferredValue,
  useRef,
  useState,
  type FormEvent,
  type JSX,
  type KeyboardEvent,
} from 'react';
import {
  ChatErrorMessage,
  isChatErrorType,
  type ChatErrorType,
} from './ChatErrorMessage';
import { ChatMessagesList } from './ChatMessagesList';
import { StreamingCatMessage } from './StreamingCatMessage';

export type Props = {
  userId: string;
  initChatMessages?: ChatMessages;
};

export const ChatContent = ({
  userId,
  initChatMessages = [],
}: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const [chatMessages, setChatMessages] =
    useState<ChatMessages>(initChatMessages);

  const [streamingMessage, setStreamingMessage] = useState<string>('');

  const deferredStreamingMessage = useDeferredValue(streamingMessage);

  const [chatErrorType, setChatChatErrorType] = useState<
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    ChatErrorType | string
  >('');

  const [conversationId, setConversationId] = useState<string>('');

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
        avatarUrl: '/no-avatar.webp',
      } as const satisfies ChatMessage;
      const newChatMessages = [...chatMessages, ...[newUserMessage]];

      setChatMessages(newChatMessages);

      setIsLoading(true);
      setChatChatErrorType('');

      let newResponseMessage = '';

      try {
        const generateCatMessageRequest =
          conversationId === ''
            ? ({
                catId: 'moko',
                userId,
                message,
              } as const)
            : ({
                catId: 'moko',
                userId,
                message,
                conversationId,
              } as const);

        const response = await generateCatMessage(generateCatMessageRequest);

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

          let partialLine = '';

          const objects = decoder
            .decode(value)
            .split('\n\n')
            .map((line) => {
              console.log(line);
              // この条件分岐に当てはまる時は完全なJSON文字列
              if (line.startsWith('data:') && line.includes('}')) {
                partialLine = line;
                const jsonString = partialLine.trim().split('data: ')[1];
                try {
                  const parsedJson = JSON.parse(jsonString) as unknown;

                  return isGenerateCatMessageResponse(parsedJson)
                    ? parsedJson
                    : null;
                } catch {
                  return null;
                } finally {
                  partialLine = '';
                }
              }

              if (
                partialLine.startsWith('data:') &&
                partialLine.includes('{') &&
                partialLine.includes('}')
              ) {
                const jsonString = partialLine.trim().split('data: ')[1];
                try {
                  const parsedJson = JSON.parse(jsonString) as unknown;

                  return isGenerateCatMessageResponse(parsedJson)
                    ? parsedJson
                    : null;
                } catch {
                  return null;
                } finally {
                  partialLine = '';
                }
              }

              if (line.startsWith('data:')) {
                partialLine = line;
              } else {
                partialLine += line;
              }

              // ここには到達しないハズ
              return null;
            })
            .filter(Boolean) as GenerateCatMessageResponse[];

          for (const object of objects) {
            const responseMessage = object.message ?? '';
            if (conversationId === '') {
              setConversationId(object.conversationId);
            }

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
          avatarUrl: '/cats/moko.webp',
        } as const;

        const newCatReplyContainedChatMessage = [
          ...newChatMessages,
          ...[newCatMessage],
        ];
        setChatMessages(newCatReplyContainedChatMessage);
      } catch (error) {
        if (error instanceof TooManyRequestsError) {
          setChatChatErrorType('TOO_MANY_REQUESTS');

          return;
        }

        setChatChatErrorType('INTERNAL_SERVER_ERROR');
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
      {deferredStreamingMessage ? (
        <StreamingCatMessage
          name="もこちゃん"
          avatarUrl="/cats/moko.webp"
          message={deferredStreamingMessage}
        />
      ) : (
        ''
      )}
      {isChatErrorType(chatErrorType) ? (
        <ChatErrorMessage type={chatErrorType} />
      ) : (
        ''
      )}
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
