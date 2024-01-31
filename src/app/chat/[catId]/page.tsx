import { ChatContent, ChatContentLayout } from '@/app/chat/_components';
import type { NextPage } from 'next';
import { v4 } from 'uuid';

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
    avatarUrl:
      '/cats/moko.webp',
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
    avatarUrl:
      '/cats/moko.webp',
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
    avatarUrl:
      '/cats/moko.webp',
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
    avatarUrl:
      '/cats/moko.webp',
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
    avatarUrl:
      '/cats/moko.webp',
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
    avatarUrl:
      '/cats/moko.webp',
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
    avatarUrl:
      '/cats/moko.webp',
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
      'そうにゃ🐱もこはウェットフードが苦手だにゃ🐱Userさんの好きな食べ物を教えてにゃー！一番下のメッセージだにゃ！',
    avatarUrl:
      '/cats/moko.webp',
  } as const,
];

const ChatPage: NextPage = () => {
  const anonymousUserId = v4();

  return (
    <ChatContentLayout>
      <ChatContent userId={anonymousUserId} initChatMessages={chatMessages} />
    </ChatContentLayout>
  );
};

export default ChatPage;
