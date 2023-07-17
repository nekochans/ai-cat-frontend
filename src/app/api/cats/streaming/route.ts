import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextResponse, type NextRequest } from 'next/server';

type RequestBody = {
  catId: string;
  userId: string;
  message: string;
};

// type ResponseBody = {
//   message: string;
// };

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

export async function POST(
  request: NextRequest,
): Promise<NextResponse | Response> {
  const { success } = await rateLimit.limit(
    request.ip != null ? request.ip : 'anonymous',
  );

  if (!success) {
    const responseBody = {
      type: 'TOO_MANY_REQUESTS',
      title: 'Too many requests.',
      detail:
        'Too many requests from this IP. Please try again after some time.',
    };

    return NextResponse.json(responseBody, { status: 429 });
  }

  const requestBody = (await request.json()) as RequestBody;

  const response = await fetch(
    `${String(process.env.API_BASE_URL)}/cats/${
      requestBody.catId
    }/streaming-messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${String(
          process.env.API_BASIC_AUTH_CREDENTIALS,
        )}`,
      },
      body: JSON.stringify({
        userId: requestBody.userId,
        message: requestBody.message,
      }),
    },
  );

  return new Response(response.body);
}
