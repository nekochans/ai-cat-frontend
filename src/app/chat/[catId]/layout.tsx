import type { Metadata } from 'next';
import type { JSX, ReactNode } from 'react';
import { type CatId, extractCatNameById, isCatId } from '@/features';
import { Noto_Sans_JP } from 'next/font/google';
import { notFound } from 'next/navigation';

const font = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});

type Props = {
  params: Promise<{ catId: string }>;
  children: ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const catId = (await params).catId;

  if (!isCatId(catId)) {
    notFound();
  }

  return {
    title: `AI Cat ${extractCatNameById(catId)}ちゃん🐱`,
    description: `ねこのAI（${extractCatNameById(
      catId,
    )}）とお話しよう🐱`,
  };
}

function ChatLayout({ children }: Props): JSX.Element {
  return <main className={font.className}>{children}</main>;
}

export default ChatLayout;
