import { HttpResponse, type ResponseResolver } from 'msw';

const encoder = new TextEncoder();

export const mockFetchCatMessageUnexpectedResponseBody: ResponseResolver =
  // eslint-disable-next-line @typescript-eslint/require-await
  async () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(
          encoder.encode(
            'data: {"conversationId": "7fe730ac-5ea9-d01d-0629-568b21f72982", "message": "こんにちは🐱"}',
          ),
        );
        controller.enqueue(
          encoder.encode(
            'data: {"conversationId": "7fe730ac-5ea9-d01d-0629-568b21f72982", "message": "もこだにゃん🐱"}',
          ),
        );
        controller.enqueue(
          encoder.encode(
            'data: {"conversationId": "7fe730ac-5ea9-d01d-0629-568b21f72982", "message": "お話しようにゃん🐱"}',
          ),
        );
        controller.enqueue(
          encoder.encode(
            'data: {"conversation_id": "7fe730ac-5ea9-d01d-0629-568b21f72982", "message": "🐱🐱🐱"}',
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
