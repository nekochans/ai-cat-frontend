export type FetchCatMessageDto = {
  catName: 'moko';
  message: string;
};

export type FetchCatMessageResponse = {
  message: string;
};

export type FetchCatMessage = (
  dto: FetchCatMessageDto
) => Promise<FetchCatMessageResponse>;
