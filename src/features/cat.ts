import { ExhaustiveError } from '@/utils';
import { z } from 'zod';

const catIds = ['moko'] as const;

export type CatId = (typeof catIds)[number];

const catNames = ['もこ'] as const;

export type CatName = (typeof catNames)[number];

export const extractCatNameById = (catId: CatId): CatName => {
  switch (catId) {
    case 'moko':
      return 'もこ';
    default:
      throw new ExhaustiveError(catId);
  }
};

export const isCatId = (value: unknown): value is CatId => {
  const result = catIds.find((element) => element === value);

  return result !== undefined;
};

export type FetchCatMessageDto = {
  catId: CatId;
  userId: string;
  message: string;
  conversationId?: string;
};

const fetchCatMessageResponseSchema = z.object({
  conversationId: z.string().min(36).max(36),
  message: z.string().min(1),
});

export type FetchCatMessageResponse = {
  conversationId: string;
  message: string;
};

export const isFetchCatMessageResponse = (
  value: unknown,
): value is FetchCatMessageResponse => {
  return fetchCatMessageResponseSchema.safeParse(value).success;
};

export type FetchCatMessage = (dto: FetchCatMessageDto) => Promise<Response>;
