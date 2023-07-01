import type { Metadata, ResolvingMetadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import type { JSX, ReactNode } from 'react';

const font = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});

type Props = {
  params: { catId: string };
  children: ReactNode;
};

export const generateMetadata = async (
  // eslint-disable-next-line
  { params }: Props,
  // eslint-disable-next-line
  parent: ResolvingMetadata
): Promise<Metadata> => {
  return {
    title: 'AI Cat もこちゃん🐱',
    description: 'ねこのAI（もこちゃん）とお話しよう🐱',
  };
};

const ChatLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default ChatLayout;
