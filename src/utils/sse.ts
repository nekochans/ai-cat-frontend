import { isValidJson } from '@/utils/isValidJson';

export const mightExtractJsonFromSsePayload = (payload: unknown): string => {
  if (typeof payload !== 'string') {
    return '';
  }

  if (!payload.startsWith('data: ')) {
    return '';
  }

  const list = payload.trim().split('data: ');
  if (list.length > 1) {
    return '';
  }

  if (isValidJson(list[1])) {
    return list[1];
  }

  return '';
};
