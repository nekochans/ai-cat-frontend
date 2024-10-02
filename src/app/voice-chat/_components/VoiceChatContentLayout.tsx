import type { JSX, ReactNode } from 'react';
import { Footer } from '@/app/_components';
import { VoiceChatHeader } from './VoiceChatHeader';

type Props = {
  children: ReactNode;
};

export function VoiceChatContentLayout({ children }: Props): JSX.Element {
  return (
    <main className="flex h-screen flex-1 flex-col justify-between bg-yellow-100 p-2 sm:p-6">
      <VoiceChatHeader />
      {children}
      <Footer />
    </main>
  );
}
