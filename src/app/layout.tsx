import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
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
      <GoogleTagManager
        gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
      />
    </html>
  );
};

export default RootLayout;
