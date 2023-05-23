import { CatChatMessage } from './CatChatMessage';
import { CatLoadingMessage } from './CatLoadingMessage';
import { UserChatMessage } from './UserChatMessage';
import { useEffect, useRef, type JSX } from 'react';

type ChatMessage = {
  role: 'user' | 'cat';
  name: string;
  message: string;
  avatarUrl: string;
};

export type ChatMessages = ChatMessage[];

type Props = {
  chatMessages: ChatMessages;
  isLoading: boolean;
};

export const ChatMessagesList = ({ chatMessages, isLoading }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div
      id="messages"
      className="flex flex-col space-y-4 overflow-y-auto bg-yellow-100 p-3"
      ref={ref}
    >
      {chatMessages.map((value, index) => {
        return value.role === 'user' ? (
          <UserChatMessage
            name={value.name}
            message={value.message}
            avatarUrl={value.avatarUrl}
            key={index}
          />
        ) : (
          <CatChatMessage
            name={value.name}
            message={value.message}
            avatarUrl={value.avatarUrl}
            key={index}
          />
        );
      })}
      {isLoading ? (
        <CatLoadingMessage
          name="もこちゃん"
          avatarUrl="https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp"
        />
      ) : (
        ''
      )}
    </div>
  );
};
