import { HttpResponse, type ResponseResolver } from 'msw';

export const mockGenerateCatMessageTooManyRequestsErrorResponseBody: ResponseResolver
  = () => {
    return HttpResponse.json(
      { type: 'TOO_MANY_REQUESTS', title: 'Too Many Requests' },
      { status: 429, statusText: 'Too Many Requests' },
    );
  };
