'use client';

import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';
import { useEffect } from 'react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const GlobalError = ({ error }: Props): JSX.Element => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="ja">
      <body>
        <Error statusCode={500} />
      </body>
    </html>
  );
};

export default GlobalError;
