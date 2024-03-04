import './globals.css';
import { GoogleTagManager } from '@/app/_components';
import { Noto_Sans_JP } from 'next/font/google';
import type { JSX, ReactNode } from 'react';

const font = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});

export const metadata = {
  title: 'AI Meow Cat',
  description:
    'ねこの人格を持ったAIとお話ができます🐱分からない事を何でも聞いてみよう！',
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="ja">
      <GoogleTagManager />
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
