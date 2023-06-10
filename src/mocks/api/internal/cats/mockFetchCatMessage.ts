import { sleep } from '@/utils';
import {
  type MockedRequest,
  type ResponseResolver,
  type restContext,
} from 'msw';

export const mockFetchCatMessage: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  await sleep();

  return await res(
    ctx.status(201),
    ctx.json({
      message:
        'こんにちは🐱もことお話しようにゃん🐱お名前を教えてほしいにゃん🐱',
    })
  );
};
