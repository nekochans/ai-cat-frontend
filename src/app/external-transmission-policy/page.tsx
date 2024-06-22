import fs from 'fs';
import {
  Footer,
  Header,
  MarkdownContents,
  MarkdownContentsLayout,
} from '@/app/_components';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'AI Meow Cat 外部送信ポリシー',
  description: 'AI Meow Cat の外部送信ポリシーです。',
};

const TermsPage: NextPage = async () => {
  const fsPromise = fs.promises;

  const markdown = await fsPromise.readFile(
    `${process.cwd()}/src/docs/external-transmission-policy.ja.md`,
    {
      encoding: 'utf8',
    },
  );

  return (
    <>
      <MarkdownContentsLayout>
        <Header enableLoginLink={false} />
        <MarkdownContents markdown={markdown} />
        <Footer />
      </MarkdownContentsLayout>
    </>
  );
};

export default TermsPage;
