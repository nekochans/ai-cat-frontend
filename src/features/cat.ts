export type FetchCatMessageDto = {
  catName: 'moko';
  userId: string;
  message: string;
};

export type FetchCatMessageResponse = {
  message: string;
};

export type FetchCatMessage = (
  dto: FetchCatMessageDto
) => Promise<FetchCatMessageResponse>;
