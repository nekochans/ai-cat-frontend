'use client';

import { ErrorTemplate } from '@/app/_components';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

function Error({ reset }: Props): JSX.Element {
  return <ErrorTemplate errorCode={500} resetFunc={reset} />;
}

export default Error;
