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
};

export default meta;

type Story = StoryObj<typeof ChatContent>;

const chatMessages = [
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
  } as const satisfies ChatMessage,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const satisfies ChatMessage,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl:
      'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
  } as const satisfies ChatMessage,
];

export const Default: Story = {
  args: {
    initChatMessages: chatMessages,
  },
  parameters: {
    msw: {
      handlers: [
        // TODO msw-storybook-addon がまだ対応していないので対応したら修正する
        http.post(
          createInternalApiUrl('generateCatMessage'),
          mockGenerateCatMessage,
        ),
      ],
    },
  },
};
