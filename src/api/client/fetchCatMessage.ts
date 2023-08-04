import { TooManyRequestsError } from '@/api/errors';
import { type FetchCatMessage } from '@/features';

export const fetchCatMessage: FetchCatMessage = async (dto) => {
  const requestBody =
    dto.conversationId != null
      ? {
          catId: dto.catId,
          userId: dto.userId,
          message: dto.message,
          conversationId: dto.conversationId,
        }
      : {
          catId: dto.catId,
          userId: dto.userId,
          message: dto.message,
        };

  const response = await fetch('/api/cats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (response.status === 429) {
    throw new TooManyRequestsError('src/api/client/fetchCatMessage.ts');
  }

  return response;
};
