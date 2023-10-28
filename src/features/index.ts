export type {
  CatId,
  FetchCatMessageDto,
  FetchCatMessageResponse,
  FetchCatMessage,
} from './cat';

export { extractCatNameById, isCatId, isFetchCatMessageResponse } from './cat';

export { createInternalApiUrl } from './url';
