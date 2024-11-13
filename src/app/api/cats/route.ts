import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { ipAddress } from '@vercel/functions';
import { type NextRequest, NextResponse } from 'next/server';

type RequestBody = {
  catId: string;
  userId: string;
  message: string;
  conversationId?: string;
};

const redis = new Redis({
  url: String(process.env.UPSTASH_REDIS_REST_URL),
  token: String(process.env.UPSTASH_REDIS_REST_TOKEN),
});

const rateLimit = new Ratelimit({
  redis,
  analytics: true,
  limiter: Ratelimit.slidingWindow(5, '10 s'),
  prefix: '@upstash/ratelimit',
});

export const runtime = 'edge';

export const maxDuration = 180;

export async function POST(
  request: NextRequest,
): Promise<Response | NextResponse> {
  const ip = ipAddress(request);

  const { success } = await rateLimit.limit(ip ?? 'anonymous');

  const headers = {
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream; charset=utf-8',
  };

  if (!success) {
    const responseBody = {
      type: 'TOO_MANY_REQUESTS',
      title: 'Too many requests.',
      detail:
        'Too many requests from this IP. Please try again after some time.',
    };

    const status = 429;

    return NextResponse.json(responseBody, { status });
  }

  const requestBody = (await request.json()) as RequestBody;

  const sendRequestBody
    = requestBody.conversationId != null
      ? {
          userId: requestBody.userId,
          message: requestBody.message,
          conversationId: requestBody.conversationId,
        }
      : {
          userId: requestBody.userId,
          message: requestBody.message,
        };

  const response = await fetch(
    `${String(process.env.API_BASE_URL)}/cats/${
      requestBody.catId
    }/messages-for-guest-users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${String(
          process.env.API_BASIC_AUTH_CREDENTIALS,
        )}`,
      },
      body: JSON.stringify(sendRequestBody),
    },
  );

  const status = 200;

  return new Response(response.body, { headers, status });
}
