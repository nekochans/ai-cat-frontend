import {
  type MockedRequest,
  type ResponseResolver,
  type restContext,
} from 'msw';

export const mockPost: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) =>
  await res(
    ctx.status(201),
    ctx.json({
      message:
        'こんにちは🐱もことお話しようにゃん🐱お名前を教えてほしいにゃん🐱',
    })
  );
