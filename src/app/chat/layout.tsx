import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import type { JSX, ReactNode } from 'react';

const font = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'AI Cat もこちゃん🐱',
  description: 'ねこのAI（もこちゃん）とお話しよう🐱',
};

type Props = {
  children: ReactNode;
};

const ChatLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default ChatLayout;
