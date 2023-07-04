import { ExhaustiveError } from '@/utils';

const catIds = ['moko'] as const;

export type CatId = (typeof catIds)[number];

const catNames = ['もこ'] as const;

type CatName = (typeof catNames)[number];

export type FetchCatMessageDto = {
  catId: CatId;
  userId: string;
  message: string;
};

export type FetchCatMessageResponse = {
  message: string;
};

export type FetchCatMessage = (
  dto: FetchCatMessageDto
) => Promise<FetchCatMessageResponse>;

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
