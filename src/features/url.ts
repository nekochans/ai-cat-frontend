const internalApiPathList = {
  fetchCatMessage: '/api/cats',
} as const;

type InternalApiPath =
  (typeof internalApiPathList)[keyof typeof internalApiPathList];

type InternalApiKey = keyof typeof internalApiPathList;

type InternalApiUrl =
  | `http://localhost:22222${InternalApiPath}`
  | InternalApiPath;

export const createInternalApiUrl = (
  key: InternalApiKey,
  includeLocalHostBaseUrl: boolean = false,
): InternalApiUrl => {
  const baseUrl = 'http://localhost:22222';

  if (process.env.NODE_ENV === 'test' || includeLocalHostBaseUrl) {
    return `${baseUrl}${internalApiPathList[key]}`;
  }

  return internalApiPathList[key];
};
