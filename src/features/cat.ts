import { ExhaustiveError } from '@/utils';
import { z } from 'zod';

const catIds = ['moko'] as const;

export type CatId = (typeof catIds)[number];

// eslint-disable-next-line unused-imports/no-unused-vars
const catNames = ['もこ'] as const;

export type CatName = (typeof catNames)[number];

export function extractCatNameById(catId: CatId): CatName {
  switch (catId) {
    case 'moko':
      return 'もこ';
    default:
      throw new ExhaustiveError(catId);
  }
}

export function isCatId(value: unknown): value is CatId {
  const result = catIds.find(element => element === value);

  return result !== undefined;
}

export type GenerateCatMessageDto = {
  catId: CatId;
  userId: string;
  message: string;
  conversationId?: string;
};

const generateCatMessageResponseSchema = z.object({
  conversationId: z.string().min(36).max(36),
  message: z.string().min(1),
});

export type GenerateCatMessageResponse = {
  conversationId: string;
  message: string;
};

export function isGenerateCatMessageResponse(value: unknown): value is GenerateCatMessageResponse {
  return generateCatMessageResponseSchema.safeParse(value).success;
}

export type GenerateCatMessage = (
  dto: GenerateCatMessageDto,
) => Promise<Response>;
