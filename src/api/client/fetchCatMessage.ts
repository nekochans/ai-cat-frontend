import { type FetchCatMessage, type FetchCatMessageResponse } from '@/features';
import { z } from 'zod';
import { InvalidResponseBodyError } from '../errors';

const fetchCatMessageResponseSchema = z.object({
  message: z.string().min(1),
});

export const fetchCatMessage: FetchCatMessage = async (dto) => {
  const response = await fetch('/api/cats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ catName: dto.catName, message: dto.message }),
  });
  const responseBody = (await response.json()) as FetchCatMessageResponse;

  const parseResult = fetchCatMessageResponseSchema.safeParse(responseBody);
  if (!parseResult.success) {
    throw new InvalidResponseBodyError('src/api/client/fetchCatMessage.ts', {
      cause: parseResult.error,
    });
  }

  return responseBody;
};
