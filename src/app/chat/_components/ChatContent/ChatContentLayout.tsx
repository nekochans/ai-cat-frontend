import type { JSX, ReactNode } from 'react';
import { Footer } from '@/app/_components';
import { ChatHeader } from './ChatHeader';

type Props = {
  children: ReactNode;
};

export function ChatContentLayout({ children }: Props): JSX.Element {
  return (
    <main className="flex h-screen flex-1 flex-col justify-between bg-yellow-100 p-2 sm:p-6">
      <ChatHeader />
      {children}
      <Footer />
    </main>
  );
}
