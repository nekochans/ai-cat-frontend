import { Footer, Header } from '@/app/_components';
import { TopContents } from '@/app/TopContents';
import type { NextPage } from 'next';

const TopPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-yellow-100">
      <Header enableLoginLink={false} />
      <TopContents />
      <Footer />
    </main>
  );
};

export default TopPage;
