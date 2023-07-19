import { CatChatMessage } from './CatChatMessage';

type Props = {
  name: string;
  avatarUrl: string;
  message: string;
};

export const StreamingCatMessage = ({
  name,
  avatarUrl,
  message,
}: Props): JSX.Element => {
  return (
    <div id="streaming-cat-message" className="flex flex-col space-y-4 p-3">
      <CatChatMessage name={name} message={message} avatarUrl={avatarUrl} />
    </div>
  );
};
