import type { NextPage } from 'next';
import { Footer, Header } from '@/app/_components';
import { TopContents } from '@/app/TopContents';
import { TopContentsLayout } from '@/app/TopContentsLayout';

const TopPage: NextPage = () => {
  return (
    <TopContentsLayout>
      <Header enableLoginLink={false} />
      <TopContents />
      <Footer />
    </TopContentsLayout>
  );
};

export default TopPage;
