export type {
  CatId,
  GenerateCatMessageDto,
  GenerateCatMessageResponse,
  GenerateCatMessage,
} from './cat';

export type { ChatMessage, ChatMessages } from './chat';

export {
  extractCatNameById,
  isCatId,
  isGenerateCatMessageResponse,
} from './cat';

export { createInternalApiUrl } from './url';
