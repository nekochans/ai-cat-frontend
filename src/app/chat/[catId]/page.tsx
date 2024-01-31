import { ChatContent, ChatContentLayout } from '@/app/chat/_components';
import type { NextPage } from 'next';
import { v4 } from 'uuid';

const ChatPage: NextPage = () => {
  const anonymousUserId = v4();

  return (
    <ChatContentLayout>
      <ChatContent userId={anonymousUserId} />
    </ChatContentLayout>
  );
};

export default ChatPage;
