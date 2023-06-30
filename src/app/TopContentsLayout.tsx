import type { JSX, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const TopContentsLayout = ({ children }: Props): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col bg-yellow-100">{children}</main>
  );
};
