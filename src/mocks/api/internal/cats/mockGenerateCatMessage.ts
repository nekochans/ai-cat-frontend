import { sleep } from '@/utils';
import { HttpResponse, type ResponseResolver } from 'msw';

const encoder = new TextEncoder();

export const mockGenerateCatMessage: ResponseResolver = () => {
  const stream = new ReadableStream({
    start: async (controller) => {
      await sleep();

      controller.enqueue(
        encoder.encode(
          'data: {"conversationId": "7fe730ac-5ea9-d01d-0629-568b21f72982", "message": "こんにちは🐱"}',
        ),
      );

      await sleep(0.5);

      controller.enqueue(
        encoder.encode(
          'data: {"conversationId": "7fe730ac-5ea9-d01d-0629-568b21f72982", "message": "もこだにゃん🐱"}',
        ),
      );

      await sleep(0.5);

      controller.enqueue(
        encoder.encode(
          'data: {"conversationId": "7fe730ac-5ea9-d01d-0629-568b21f72982", "message": "お話しようにゃん🐱"}',
        ),
      );

      await sleep(0.5);

      controller.enqueue(
        encoder.encode(
          'data: {"conversationId": "7fe730ac-5ea9-d01d-0629-568b21f72982", "message": "🐱🐱🐱"}',
        ),
      );
      controller.close();
    },
  });

  return new HttpResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
    },
  });
};
