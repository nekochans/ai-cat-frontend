import { NextResponse } from 'next/server';

type RequestBody = {
  catName: string;
  message: string;
};

type ResponseBody = {
  message: string;
};

export const runtime = 'edge';

export async function POST(request: Request): Promise<NextResponse> {
  const requestBody = (await request.json()) as RequestBody;

  const response = await fetch(
    `${String(process.env.API_BASE_URL)}/cats/${requestBody.catName}/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${String(
          process.env.API_BASIC_AUTH_CREDENTIALS
        )}`,
      },
      body: JSON.stringify({ message: requestBody.message }),
    }
  );
  const responseBody = (await response.json()) as ResponseBody;

  return NextResponse.json(responseBody, { status: 201 });
}
