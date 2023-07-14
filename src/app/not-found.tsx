import { ErrorTemplate } from '@/app/_components';
import type { JSX } from 'react';

const NotFound = (): JSX.Element => {
  return <ErrorTemplate errorCode={404} />;
};

export default NotFound;
