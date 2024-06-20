import ReactMarkdown from 'react-markdown';

type Props = {
  markdown: string;
};

export const MarkdownContents = ({ markdown }: Props): JSX.Element => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};
