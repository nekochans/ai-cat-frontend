import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import type { JSX, ReactNode } from 'react';

const font = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});

export const metadata = {
  title: 'AI Cat🐱',
  description: 'ねこのAIとお話しよう🐱',
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
