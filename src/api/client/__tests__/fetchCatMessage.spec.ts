import { fetchCatMessage } from '@/api/client/fetchCatMessage';
import { InvalidResponseBodyError } from '@/api/errors';
import {
  mockFetchCatMessage,
  mockFetchCatMessageUnexpectedResponseBody,
} from '@/mocks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockHandlers = [rest.post('/api/cats', mockFetchCatMessage)];

const mockServer = setupServer(...mockHandlers);

describe('src/api/client/fetchCatMessage.ts fetchCatMessage TestCases', () => {
  beforeAll(() => {
    mockServer.listen();
  });

  afterEach(() => {
    mockServer.resetHandlers();
  });

  afterAll(() => {
    mockServer.close();
  });

  it('should be able to fetch a CatMessage', async () => {
    const fetchedResponse = await fetchCatMessage({
      catName: 'moko',
      message: 'こんにちは！',
    });

    const expected = {
      message:
        'こんにちは🐱もことお話しようにゃん🐱お名前を教えてほしいにゃん🐱',
    };

    expect(fetchedResponse).toStrictEqual(expected);
  });

  it('should InvalidResponseBodyError Throw, because unexpected response body', async () => {
    mockServer.use(
      rest.post('/api/cats', mockFetchCatMessageUnexpectedResponseBody)
    );

    const dto = {
      catName: 'moko',
      message: 'ねこ！',
    } as const;

    await expect(fetchCatMessage(dto)).rejects.toThrow(
      InvalidResponseBodyError
    );
  });
});
