import type { Metadata, NextPage } from 'next';
import fs from 'node:fs';
import {
  Footer,
  Header,
  MarkdownContents,
  MarkdownContentsLayout,
} from '@/app/_components';

export const metadata: Metadata = {
  title: 'AI Meow Cat 利用規約',
  description: 'AI Meow Cat の利用規約です。',
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
    <MarkdownContentsLayout>
      <Header enableLoginLink={false} />
      <MarkdownContents markdown={markdown} />
      <Footer />
    </MarkdownContentsLayout>
  );
};

export default TermsPage;
