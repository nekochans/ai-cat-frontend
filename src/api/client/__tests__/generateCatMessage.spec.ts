/**
 * @jest-environment node
 */
import { describe, it, expect, afterEach, afterAll } from "@jest/globals";
import { generateCatMessage } from '@/api/client/generateCatMessage';
import { TooManyRequestsError } from '@/api/errors';
import {
  isGenerateCatMessageResponse,
  type GenerateCatMessageResponse,
} from '@/features';
import { createInternalApiUrl } from '@/features/url';
import {
  mockGenerateCatMessage,
  mockGenerateCatMessageTooManyRequestsErrorResponseBody,
} from '@/mocks';
import { http } from 'msw';
import { setupServer } from 'msw/node';

const mockHandlers = [
  http.post(createInternalApiUrl('generateCatMessage'), mockGenerateCatMessage),
];

const mockServer = setupServer(...mockHandlers);

// eslint-disable-next-line
describe('src/api/client/generateCatMessage.ts generateCatMessage TestCases', () => {
  // TODO これがあるとJestが正常終了しない問題があるので解決するまでコメントアウト
  // beforeAll(() => {
  //   mockServer.listen();
  // });

  afterEach(() => {
    mockServer.resetHandlers();
  });

  afterAll(() => {
    mockServer.close();
  });

  it('should be able to generated CatMessage', async () => {
    const generatedResponse = await generateCatMessage({
      catId: 'moko',
      userId: 'userId1234567890',
      message: 'こんにちは！',
    });

    expect(generatedResponse.body).toBeInstanceOf(ReadableStream);

    const expected = [
      {
        conversationId: '7fe730ac-5ea9-d01d-0629-568b21f72982',
        message: 'こんにちは🐱',
      },
      {
        conversationId: '7fe730ac-5ea9-d01d-0629-568b21f72982',
        message: 'もこだにゃん🐱',
      },
      {
        conversationId: '7fe730ac-5ea9-d01d-0629-568b21f72982',
        message: 'お話しようにゃん🐱',
      },
      {
        conversationId: '7fe730ac-5ea9-d01d-0629-568b21f72982',
        message: '🐱🐱🐱',
      },
    ];

    const reader =
      generatedResponse.body?.getReader() as ReadableStreamDefaultReader<Uint8Array>;
    const decoder = new TextDecoder();

    let index = 0;

    const readStream = async (): Promise<undefined> => {
      const { done, value } = await reader.read();

      if (done) {
        return;
      }

      const objects = decoder
        .decode(value)
        .split('\n\n')
        .map((line) => {
          const jsonString = line.trim().split('data: ')[1];
          try {
            const parsedJson = JSON.parse(jsonString) as unknown;

            return isGenerateCatMessageResponse(parsedJson) ? parsedJson : null;
          } catch {
            return null;
          }
        })
        .filter(Boolean) as GenerateCatMessageResponse[];

      for (const object of objects) {
        expect(object).toStrictEqual(expected[index]);
        index++;
      }

      await readStream();
    };

    await readStream();

    reader.releaseLock();
  }, 10000);

  // TODO テストが通るがJestが正常終了しない問題があるので解決するまでスキップ
  it.skip('should TooManyRequestsError Throw, because unexpected response body', async () => {
    mockServer.use(
      http.post(
        createInternalApiUrl('generateCatMessage'),
        mockGenerateCatMessageTooManyRequestsErrorResponseBody,
      ),
    );

    const dto = {
      catId: 'moko',
      userId: 'userId1234567890',
      message: 'ねこ！',
    } as const;

    await expect(generateCatMessage(dto)).rejects.toThrow(TooManyRequestsError);
  });
});
