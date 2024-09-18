export type ChatMessage = {
  role: 'user' | 'cat';
  name: string;
  message: string;
  avatarUrl: string;
};

export type ChatMessages = ChatMessage[];

const chatErrorTypeList = [
  'TOO_MANY_REQUESTS',
  'INTERNAL_SERVER_ERROR',
] as const;

export type ChatErrorType = (typeof chatErrorTypeList)[number];

export function isChatErrorType(value: unknown): value is ChatErrorType {
  if (typeof value !== 'string') {
    return false;
  }

  return chatErrorTypeList.includes(value as ChatErrorType);
}
