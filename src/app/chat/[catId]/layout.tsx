import { extractCatNameById, isCatId, type CatId } from '@/features';
import type { Metadata, ResolvingMetadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { JSX, ReactNode } from 'react';

const font = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});

type Props = {
  params: { catId: CatId };
  children: ReactNode;
};

export const generateMetadata = async (
  { params }: Props,
  // eslint-disable-next-line
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  if (!isCatId(params.catId)) {
    notFound();
  }

  return {
    title: `AI Cat ${extractCatNameById(params.catId)}ちゃん🐱`,
    description: `ねこのAI（${extractCatNameById(
      params.catId,
    )}）とお話しよう🐱`,
  };
};

const ChatLayout = ({ children }: Props): JSX.Element => {
  return <main className={font.className}>{children}</main>;
};

export default ChatLayout;
