import { isSseErrorPayload } from '@/utils/sse';
import { describe, expect, it } from 'vitest';

describe('src/utils/sse.ts isSseErrorPayload TestCases', () => {
  type TestTable = {
    payload: unknown;
    expected: boolean;
  };

  it.each`
    payload                                                                                    | expected
    ${'data: {"type": "INTERNAL_SERVER_ERROR", "title": "an unexpected error has occurred."}'} | ${true}
    ${'data: invalid'}                                                                         | ${false}
    ${123}                                                                                     | ${false}
    ${'data: {"key": "value"}'}                                                                | ${false}
    ${'data: {"type": "error"}'}                                                               | ${false}
    ${'data: {"title": "An error occurred"}'}                                                  | ${false}
    ${'A server error has occurred'}                                                           | ${true}
    ${'INTERNAL_SERVER_ERROR'}                                                                 | ${true}
  `(
    'should return true if payload is an error, else return false. payload: $payload',
    ({ payload, expected }: TestTable) => {
      expect(isSseErrorPayload(payload)).toStrictEqual(expected);
    },
  );
});
