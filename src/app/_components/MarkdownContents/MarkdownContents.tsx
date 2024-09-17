import ReactMarkdown from 'react-markdown';

type Props = {
  markdown: string;
};

export function MarkdownContents({ markdown }: Props): JSX.Element {
  return (
    <div className="markdown">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
