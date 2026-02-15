import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ALLOWED_PATHS = ['/terms', '/privacy', '/external-transmission-policy'];

const maintenanceHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>メンテナンス中 | AI Meow Cat</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Noto Sans JP', sans-serif;
      background-color: #fef9c3;
      color: #111827;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    header {
      background-color: #fef08a;
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    header img { height: 50px; width: 50px; }
    header nav a {
      margin-left: 2rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: #111827;
      text-decoration: none;
    }
    header nav a:hover { text-decoration: underline; }
    main {
      flex: 1;
      max-width: 56rem;
      margin: 0 auto;
      padding: 2.5rem 1.5rem 4rem;
      width: 100%;
    }
    .content { text-align: center; margin-top: 5rem; }
    .error-code {
      font-size: 3.75rem;
      font-weight: 600;
      line-height: 1;
      color: #f97316;
    }
    .cat-image {
      margin: 1.5rem auto;
      display: block;
      max-width: 300px;
      height: auto;
    }
    .error-title {
      margin-top: 1rem;
      font-size: 1.875rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: #111827;
    }
    .error-description {
      margin-top: 1rem;
      font-size: 1rem;
      line-height: 1.75;
      color: #4b5563;
    }
    footer {
      margin: 1rem;
      padding: 1rem;
      background-color: #fef08a;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .footer-inner {
      max-width: 80rem;
      margin: 0 auto;
      padding: 1rem;
    }
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      list-style: none;
      margin-bottom: 1.5rem;
    }
    .footer-links a {
      font-size: 0.875rem;
      font-weight: 500;
      color: #111827;
      text-decoration: none;
    }
    .footer-links a:hover { text-decoration: underline; }
    .footer-divider {
      border: none;
      border-top: 1px solid #fde68a;
      margin: 1.5rem 0;
    }
    .footer-copyright {
      text-align: center;
      font-size: 0.875rem;
      color: #111827;
    }
    .footer-copyright a { color: inherit; text-decoration: none; }
    .footer-copyright a:hover { text-decoration: underline; }
    @media (min-width: 640px) {
      .error-title { font-size: 3rem; }
      .error-description { margin-top: 1.5rem; font-size: 1.125rem; }
    }
    @media (max-width: 1024px) {
      header nav { display: none; }
    }
  </style>
</head>
<body>
  <header>
    <img src="/header-service-icon.svg" alt="AI Meow Cat" />
    <nav>
      <a href="/terms">terms</a>
      <a href="/privacy">privacy</a>
      <a href="/external-transmission-policy">external transmission</a>
    </nav>
  </header>
  <main>
    <div class="content">
      <p class="error-code">503</p>
      <img class="cat-image" src="/500.webp" alt="Cat on a keyboard" width="300" height="300" />
      <h1 class="error-title">メンテナンス中</h1>
      <p class="error-description">
        現在サービスのメンテナンスを行っております。ご不便をおかけして申し訳ございません。<br />
        サービスは大幅リニューアルして戻ってきます。
      </p>
    </div>
  </main>
  <footer>
    <div class="footer-inner">
      <ul class="footer-links">
        <li><a href="/terms">Terms of Use</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/external-transmission-policy">External Transmission Policy</a></li>
      </ul>
      <hr class="footer-divider" />
      <p class="footer-copyright">Copyright (c) <a href="https://github.com/nekochans">nekochans</a></p>
    </div>
  </footer>
</body>
</html>`;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (ALLOWED_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400',
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|webp|png|jpg|jpeg|gif|ico)$).*)'],
};
