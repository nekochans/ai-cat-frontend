import type { Metadata, NextPage } from 'next';
import { ChatContent, ChatContentLayout } from '@/app/chat/_components';
import { type CatId, extractCatNameById } from '@/features';
import { v4 } from 'uuid';

type Props = {
  params: Promise<{ catId: CatId }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const catId = (await params).catId;

  return {
    title: `AI Meow Cat ${extractCatNameById(catId)}`,
    description: `AIねこの「${extractCatNameById(
      catId,
    )}ちゃん」とお話ができます🐱分からない事を何でも聞いてみよう！`,
  };
}

const ChatPage: NextPage<Props> = () => {
  const anonymousUserId = v4();

  return (
    <ChatContentLayout>
      <ChatContent userId={anonymousUserId} />
    </ChatContentLayout>
  );
};

export default ChatPage;
