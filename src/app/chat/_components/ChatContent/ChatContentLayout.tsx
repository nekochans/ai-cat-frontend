import { Footer } from '@/app/_components';
import type { JSX, ReactNode } from 'react';
import { ChatHeader } from './ChatHeader';

type Props = {
  children: ReactNode;
};

export const ChatContentLayout = ({ children }: Props): JSX.Element => {
  return (
    <main className="flex h-screen flex-1 flex-col justify-between bg-yellow-100 p-2 sm:p-6">
      <ChatHeader />
      {children}
      <Footer />
    </main>
  );
};
