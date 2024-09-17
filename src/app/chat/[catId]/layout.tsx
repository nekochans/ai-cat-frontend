import type { Metadata, ResolvingMetadata } from 'next';
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
  params: { catId: CatId };
  children: ReactNode;
};

export async function generateMetadata({ params }: Props,
  // eslint-disable-next-line
  parent: ResolvingMetadata): Promise<Metadata> {
  if (!isCatId(params.catId)) {
    notFound();
  }

  return {
    title: `AI Cat ${extractCatNameById(params.catId)}ちゃん🐱`,
    description: `ねこのAI（${extractCatNameById(
      params.catId,
    )}）とお話しよう🐱`,
  };
}

function ChatLayout({ children }: Props): JSX.Element {
  return <main className={font.className}>{children}</main>;
}

export default ChatLayout;
