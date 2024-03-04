import { ChatContent, ChatContentLayout } from '@/app/chat/_components';
import { extractCatNameById, type CatId } from '@/features';
import type { Metadata, NextPage } from 'next';
import { v4 } from 'uuid';

type Props = {
  params: { catId: CatId };
};

export const generateMetadata = async ({
  params,
  // eslint-disable-next-line @typescript-eslint/require-await
}: Props): Promise<Metadata> => {
  const catId = params.catId;

  return {
    title: `AI Meow Cat ${extractCatNameById(catId)}`,
    description: `AIねこの「${extractCatNameById(
      catId,
    )}ちゃん」とお話ができます🐱分からない事を何でも聞いてみよう！`,
  };
};

const ChatPage: NextPage<Props> = () => {
  const anonymousUserId = v4();

  return (
    <ChatContentLayout>
      <ChatContent userId={anonymousUserId} />
    </ChatContentLayout>
  );
};

export default ChatPage;
