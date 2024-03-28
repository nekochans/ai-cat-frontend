import { createInternalApiUrl, type ChatMessage } from '@/features';
import { mockGenerateCatMessage } from '@/mocks/api';
import type { Meta, StoryObj } from '@storybook/react';
import { http } from 'msw';
import { type JSX } from 'react';
import { ChatContent, type Props } from './ChatContent';
import { ChatContentLayout } from './ChatContentLayout';

const ChatContentWithLayout = ({ initChatMessages }: Props): JSX.Element => {
  return (
    <ChatContentLayout>
      <ChatContent
        userId="userId1234567890"
        initChatMessages={initChatMessages}
      />
    </ChatContentLayout>
  );
};

const meta: Meta = {
  component: ChatContentWithLayout,
} satisfies Meta<typeof ChatContentWithLayout>;

export default meta;

type Story = StoryObj<typeof ChatContent>;

const chatMessages = [
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: '/no-avatar.webp',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl: '/cats/moko.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: '/no-avatar.webp',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl: '/cats/moko.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: '/no-avatar.webp',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl: '/cats/moko.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: '/no-avatar.webp',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl: '/cats/moko.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: '/no-avatar.webp',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl: '/cats/moko.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: '/no-avatar.webp',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl: '/cats/moko.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: '/no-avatar.webp',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl: '/cats/moko.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: '/no-avatar.webp',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl: '/cats/moko.webp',
  } as const satisfies ChatMessage,
];

export const Default: Story = {
  args: {
    initChatMessages: chatMessages,
  },
  parameters: {
    msw: {
      handlers: [
        http.post(
          createInternalApiUrl('generateCatMessage'),
          mockGenerateCatMessage,
        ),
      ],
    },
  },
};
