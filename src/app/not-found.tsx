import type { JSX } from 'react';
import { ErrorTemplate } from '@/app/_components';

function NotFound(): JSX.Element {
  return <ErrorTemplate errorCode={404} />;
}

export default NotFound;
