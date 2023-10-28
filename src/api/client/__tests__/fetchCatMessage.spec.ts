/**
 * @jest-environment node
 */
import { fetchCatMessage } from '@/api/client/fetchCatMessage';
import { TooManyRequestsError } from '@/api/errors';
import {
  isFetchCatMessageResponse,
  type FetchCatMessageResponse,
} from '@/features';
import { createInternalApiUrl } from '@/features/url';
import {
  mockFetchCatMessage,
  mockFetchCatMessageTooManyRequestsErrorResponseBody,
} from '@/mocks';
import { http } from 'msw';
import { setupServer } from 'msw/node';

const mockHandlers = [
  http.post(createInternalApiUrl('fetchCatMessage'), mockFetchCatMessage),
];

const mockServer = setupServer(...mockHandlers);

// eslint-disable-next-line
describe('src/api/client/fetchCatMessage.ts fetchCatMessage TestCases', () => {
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

  it('should be able to fetch a CatMessage', async () => {
    const fetchedResponse = await fetchCatMessage({
      catId: 'moko',
      userId: 'userId1234567890',
      message: 'こんにちは！',
    });

    expect(fetchedResponse.body).toBeInstanceOf(ReadableStream);

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
      fetchedResponse.body?.getReader() as ReadableStreamDefaultReader<Uint8Array>;
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

            return isFetchCatMessageResponse(parsedJson) ? parsedJson : null;
          } catch {
            return null;
          }
        })
        .filter(Boolean) as FetchCatMessageResponse[];

      for (const object of objects) {
        expect(object).toStrictEqual(expected[index]);
        index++;
      }

      await readStream();
    };

    await readStream();

    reader.releaseLock();
  });

  // TODO テストが通るがJestが正常終了しない問題があるので解決するまでスキップ
  it.skip('should TooManyRequestsError Throw, because unexpected response body', async () => {
    mockServer.use(
      http.post(
        createInternalApiUrl('fetchCatMessage'),
        mockFetchCatMessageTooManyRequestsErrorResponseBody,
      ),
    );

    const dto = {
      catId: 'moko',
      userId: 'userId1234567890',
      message: 'ねこ！',
    } as const;

    await expect(fetchCatMessage(dto)).rejects.toThrow(TooManyRequestsError);
  });
});
