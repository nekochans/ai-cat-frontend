import { CatChatMessage } from './CatChatMessage';

type Props = {
  catName: string;
  catAvatarUrl: string;
  streamingMessage: string;
};

export const StreamingCatMessage = ({
  catName,
  catAvatarUrl,
  streamingMessage,
}: Props): JSX.Element => {
  return (
    <div
      id="streaming-cat-message"
      className="flex flex-col space-y-4 p-3"
    >
      <CatChatMessage
        name={catName}
        message={streamingMessage}
        avatarUrl={catAvatarUrl}
      />
    </div>
  );
};
