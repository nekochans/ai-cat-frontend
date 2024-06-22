import fs from 'fs';
import {
  Footer,
  Header,
  MarkdownContents,
  MarkdownContentsLayout,
} from '@/app/_components';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'AI Meow Cat プライバシーポリシー',
  description: 'AI Meow Cat のプライバシーポリシーです。',
};

const TermsPage: NextPage = async () => {
  const fsPromise = fs.promises;

  const markdown = await fsPromise.readFile(
    `${process.cwd()}/src/docs/terms.ja.md`,
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
