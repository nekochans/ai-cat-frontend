import { isValidJson } from '@/utils/isValidJson';
import { z } from 'zod';

export function mightExtractJsonFromSsePayload(payload: unknown): string {
  if (typeof payload !== 'string') {
    return '';
  }

  if (!payload.startsWith('data: ')) {
    return '';
  }

  const list = payload.trim().split('data: ');

  if (list.length <= 2) {
    if (isValidJson(list[1])) {
      return list[1];
    }
  }

  return '';
}

const errorPayloadSchema = z.object({
  type: z.string().min(1),
  title: z.string().min(1),
});

type ErrorPayload = {
  type: string;
  title: string;
};

function isErrorPayload(value: unknown): value is ErrorPayload {
  return errorPayloadSchema.safeParse(value).success;
}

export function isSseErrorPayload(payload: unknown): boolean {
  if (typeof payload !== 'string') {
    return false;
  }

  if (
    payload.includes('A server error has occurred')
    || payload.includes('INTERNAL_SERVER_ERROR')
  ) {
    return true;
  }

  if (payload.startsWith('data: ')) {
    const list = payload.trim().split('data: ');

    if (list.length <= 2) {
      if (isValidJson(list[1])) {
        return isErrorPayload(list[1]);
      }
    }
  }

  return false;
}
