const productionAppUrl = 'https://www.ai-meow-cat.com';

const internalApiPathList = {
  fetchCatMessage: '/api/cats',
} as const;

type InternalApiPath =
  (typeof internalApiPathList)[keyof typeof internalApiPathList];

type InternalApiKey = keyof typeof internalApiPathList;

type InternalApiUrl =
  | `${typeof productionAppUrl}${InternalApiPath}`
  | InternalApiPath;


export const createInternalApiUrl = (
  key: InternalApiKey,
  includeLocalHostBaseUrl: boolean = false,
): InternalApiUrl => {
  const baseUrl = 'https://www.ai-meow-cat.com';

  if (process.env.NODE_ENV === 'test' || includeLocalHostBaseUrl) {
    return `${baseUrl}${internalApiPathList[key]}`;
  }

  return internalApiPathList[key];
};
