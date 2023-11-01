import { TooManyRequestsError } from '@/api/errors';
import { createInternalApiUrl, type GenerateCatMessage } from '@/features';

export const generateCatMessage: GenerateCatMessage = async (dto) => {
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

  const response = await fetch(createInternalApiUrl('generateCatMessage'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (response.status === 429) {
    throw new TooManyRequestsError('src/api/client/generateCatMessage.ts');
  }

  return response;
};
