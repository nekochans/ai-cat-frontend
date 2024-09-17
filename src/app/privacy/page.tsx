import type { Metadata, NextPage } from 'next';
import fs from 'node:fs';
import {
  Footer,
  Header,
  MarkdownContents,
  MarkdownContentsLayout,
} from '@/app/_components';

export const metadata: Metadata = {
  title: 'AI Meow Cat プライバシーポリシー',
  description: 'AI Meow Cat のプライバシーポリシーです。',
};

const PrivacyPage: NextPage = async () => {
  const fsPromise = fs.promises;

  const markdown = await fsPromise.readFile(
    `${process.cwd()}/src/docs/privacy.ja.md`,
    {
      encoding: 'utf8',
    },
  );

  return (
    <MarkdownContentsLayout>
      <Header enableLoginLink={false} />
      <MarkdownContents markdown={markdown} />
      <Footer />
    </MarkdownContentsLayout>
  );
};

export default PrivacyPage;
