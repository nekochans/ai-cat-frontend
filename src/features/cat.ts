export type CatId = 'moko';

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
