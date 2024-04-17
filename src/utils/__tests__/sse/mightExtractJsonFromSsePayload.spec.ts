import { mightExtractJsonFromSsePayload } from '@/utils/sse';
import { describe, expect, it } from 'vitest';

describe('src/utils/sse.ts mightExtractJsonFromSsePayload TestCases', () => {
  type TestTable = {
    payload: unknown;
    expected: string;
  };

  it.each`
    payload                           | expected
    ${'data: {"key": "value"}'}       | ${'{"key": "value"}'}
    ${'data: invalid'}                | ${''}
    ${123}                            | ${''}
    ${'data:{"key": "value"}'}        | ${''}
    ${'data: {"key": 1}'}             | ${'{"key": 1}'}
    ${'data: {"key": true}'}          | ${'{"key": true}'}
    ${'data: {"key": false}'}         | ${'{"key": false}'}
    ${'data: {"key": null}'}          | ${'{"key": null}'}
    ${'data: {"key": ["1"]}'}         | ${'{"key": ["1"]}'}
    ${'data: {"key": {"key1": "1"}}'} | ${'{"key": {"key1": "1"}}'}
    ${'data: {}'}                     | ${'{}'}
    ${'data: []'}                     | ${'[]'}
  `(
    'should return expected JSON string if payload is valid, else return empty string. payload: $payload',
    ({ payload, expected }: TestTable) => {
      expect(mightExtractJsonFromSsePayload(payload)).toStrictEqual(expected);
    },
  );
});
