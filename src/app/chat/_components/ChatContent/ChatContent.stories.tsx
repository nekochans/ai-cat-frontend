import type { Meta, StoryObj } from '@storybook/react';
import { type ChatMessage, createInternalApiUrl } from '@/features';
import { mockGenerateCatMessage } from '@/mocks/api';
import { http } from 'msw';
import { ChatContent } from './ChatContent';
import { ChatContentLayout } from './ChatContentLayout';

const meta: Meta = {
  component: ChatContent,
  decorators: [
    Story => (
      <ChatContentLayout>
        <Story />
      </ChatContentLayout>
    ),
  ],
} satisfies Meta<typeof ChatContent>;

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
    userId: 'userId1234567890',
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
