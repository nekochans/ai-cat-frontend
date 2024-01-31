import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessagesList } from './ChatMessagesList';

const meta: Meta = {
  component: ChatMessagesList,
};

export default meta;

type Story = StoryObj<typeof ChatMessagesList>;

const chatMessages = [
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl: '/cats/moko.webp',
  } as const,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl: '/cats/moko.webp',
  } as const,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl: '/cats/moko.webp',
  } as const,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl: '/cats/moko.webp',
  } as const,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl: '/cats/moko.webp',
  } as const,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl: '/cats/moko.webp',
  } as const,
  {
    role: 'user',
    name: 'User',
    message: 'こんにちはもこちゃん！お話しよう！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！',
    avatarUrl: '/cats/moko.webp',
  } as const,
  {
    role: 'user',
    name: 'User',
    message:
      'ねこちゃんはチュール好きな子多いけど、もこちゃんは好きじゃないんだね！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
  {
    role: 'cat',
    name: 'もこちゃん',
    message:
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！',
    avatarUrl: '/cats/moko.webp',
  } as const,
  {
    role: 'user',
    name: 'User',
    message: '私はブルーベリーが好きなんだ！',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
  } as const,
];

export const ShowIsLoadingFalse: Story = {
  args: {
    chatMessages,
    isLoading: false,
  },
};

export const ShowIsLoadingTrue: Story = {
  args: {
    chatMessages,
    isLoading: true,
  },
};
