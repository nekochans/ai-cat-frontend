import type { Metadata, NextPage } from 'next';
import { VoiceChatContent } from '@/app/voice-chat/_components/VoiceChatContent';
import { VoiceChatContentLayout } from '@/app/voice-chat/_components/VoiceChatContentLayout';
import { type CatId, extractCatNameById } from '@/features';

type Props = {
  params: { catId: CatId };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const catId = params.catId;

  return {
    title: `AI Meow Cat ${extractCatNameById(catId)}(Voice Chat)`,
    description: `AIねこの「${extractCatNameById(
      catId,
    )}ちゃん」とお話ができます🐱分からない事を何でも聞いてみよう！`,
  };
}

const VoiceChatPage: NextPage<Props> = () => {
  return (
    <VoiceChatContentLayout>
      <VoiceChatContent />
    </VoiceChatContentLayout>
  );
};

export default VoiceChatPage;
