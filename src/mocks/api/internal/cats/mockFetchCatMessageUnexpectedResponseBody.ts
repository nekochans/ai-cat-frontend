import { sleep } from '@/utils';
import {
  type MockedRequest,
  type ResponseResolver,
  type restContext,
} from 'msw';

export const mockFetchCatMessageUnexpectedResponseBody: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  await sleep();

  return await res(
    ctx.status(201),
    ctx.json({
      catMessageText:
        'こんにちは🐱もことお話しようにゃん🐱お名前を教えてほしいにゃん🐱',
    }),
  );
};
