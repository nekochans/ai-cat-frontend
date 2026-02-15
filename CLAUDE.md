# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Cat Frontend — a Next.js 16 web frontend for an AI chat service where users talk with a cat-persona AI character. The app uses App Router, Edge Runtime for API routes, and SSE (Server-Sent Events) for streaming chat responses.

Production domain: `https://www.ai-meow-cat.com`

## Commands

```bash
npm run dev              # Dev server on port 22222
npm run build            # Production build
npm run test             # Run all tests (vitest)
npm run test:ci          # Tests with coverage (v8)
npm run lint             # ESLint check
npm run format           # Auto-fix lint issues
npm run storybook        # Storybook on port 6006
npm run chromatic        # Deploy Storybook to Chromatic
```

Run a single test file:
```bash
npx vitest run src/path/to/file.test.ts
```

Install dependencies (legacy-peer-deps is configured in .npmrc):
```bash
npm ci
```

## Architecture

### App Router Structure

- `src/app/` — Next.js App Router pages and layouts
- `src/app/api/cats/route.ts` — POST endpoint (Edge Runtime, 180s max duration). Handles Basic Auth, rate limiting via Upstash Redis, and proxies to the backend API. Returns SSE stream.
- `src/app/chat/[catId]/` — Dynamic chat page per cat character (currently only `moko`)
- `src/app/_components/` — Shared layout components (Header, Footer, ErrorTemplate, GoogleTagManager, MarkdownContents)
- `src/app/chat/_components/` — Chat UI components (ChatContent, ChatMessage, StreamingCatMessage, VoiceInputButton, etc.)

### Feature Organization

- `src/features/` — Domain types and utilities (CatId, ChatMessage, type guards with Zod validation)
- `src/api/client/` — API client functions (generateCatMessage)
- `src/api/errors/` — API error types (TooManyRequestsError, InvalidResponseBodyError)
- `src/utils/` — General utilities (SSE handler, sleep, isValidJson, ExhaustiveError)
- `src/mocks/` — MSW (Mock Service Worker) handlers for API mocking in tests and Storybook

### Data Flow

UI Component → `src/api/client/generateCatMessage.ts` → `POST /api/cats` (Edge Route) → Upstash rate limit check → External backend API → SSE response streamed back to client

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json)

## Tech Stack & Key Libraries

- **Next.js 16** with App Router and Edge Runtime
- **React 18**, **TypeScript** (strict mode)
- **Tailwind CSS 3** for styling
- **Sentry** for error monitoring (client, server, and edge configs at project root)
- **Upstash Redis** for rate limiting
- **Zod** for runtime schema validation
- **MSW** for API mocking in tests/Storybook
- **Vitest** + **@testing-library/react** for testing (jsdom environment)
- **Storybook 8** with Chromatic for visual testing

## Code Style

- ESLint config: `@antfu/eslint-config` with React support — semicolons required, `type` keyword enforced for TypeScript type imports/exports
- Tailwind CSS plugin integrated with ESLint
- Formatting handled through ESLint (not a separate Prettier config)
- Components use `.tsx`, utilities use `.ts`
- Test files are colocated in `__tests__/` directories next to source files

## Environment Variables

Required for local development:
- `API_BASE_URL` — Backend API base URL
- `API_BASIC_AUTH_CREDENTIALS` — Basic auth credentials for backend API
- `UPSTASH_REDIS_REST_URL` — Upstash Redis URL for rate limiting
- `UPSTASH_REDIS_REST_TOKEN` — Upstash Redis token
- `NEXT_PUBLIC_SENTRY_DSN` — Sentry DSN (optional for local dev)

## CI

GitHub Actions runs on push to main and PRs targeting main:
- `npm ci --legacy-peer-deps` → `npm run lint` → `npm run test:ci` → codecov upload
- Timeout: 7 minutes
- Chromatic deployment runs on all branch pushes (separate workflow)
