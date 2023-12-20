type GoogleTagManager = `GTM-${string}`;

const isGoogleTagManagerId = (value: unknown): value is GoogleTagManager => {
  if (typeof value !== 'string') {
    return false;
  }

  const startPosition = 0;

  const endPosition = 4;

  return value.slice(startPosition, endPosition) === 'GTM-';
};

export const googleTagManagerId = (): GoogleTagManager => {
  if (isGoogleTagManagerId(process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID)) {
    return process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
  }

  // デフォルト値はステージング用の値を返す
  return 'GTM-PFPJCGWH';
};
