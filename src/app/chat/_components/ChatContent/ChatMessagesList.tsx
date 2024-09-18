import type { ChatMessages } from '@/features';
import { type JSX, useEffect, useRef } from 'react';
import { CatChatMessage } from './CatChatMessage';
import { CatLoadingMessage } from './CatLoadingMessage';
import { UserChatMessage } from './UserChatMessage';

type Props = {
  chatMessages: ChatMessages;
  isLoading: boolean;
};

export function ChatMessagesList({
  chatMessages,
  isLoading,
}: Props): JSX.Element {
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
        return value.role === 'user'
          ? (
              <UserChatMessage
                name={value.name}
                message={value.message}
                avatarUrl={value.avatarUrl}
                key={index}
              />
            )
          : (
              <CatChatMessage
                name={value.name}
                message={value.message}
                avatarUrl={value.avatarUrl}
                key={index}
              />
            );
      })}
      {isLoading
        ? (
            <CatLoadingMessage name="もこちゃん" avatarUrl="/cats/moko.webp" />
          )
        : (
            ''
          )}
    </div>
  );
}
