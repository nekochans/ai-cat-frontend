import { Footer, Header } from '@/app/_components';
import { BackToTopLink } from '@/app/_components/ErrorTemplate/BackToTopLink';
import { ErrorResetButton } from '@/app/_components/ErrorTemplate/ErrorResetButton';
import { ExhaustiveError } from '@/utils';
import Image from 'next/image';
import type { JSX, ReactNode } from 'react';

type ErrorCode = 404 | 500;

type Props = {
  errorCode: ErrorCode;
  resetFunc?: () => void;
  children?: ReactNode;
};

const showErrorImage = (errorCode: ErrorCode): JSX.Element => {
  switch (errorCode) {
    case 404:
      return (
        <Image
          src="/404.webp"
          width={300}
          height={300}
          alt="Cat in a Box"
          className="mx-auto"
        />
      );
    case 500:
      return (
        <Image
          src="/500.webp"
          width={300}
          height={300}
          alt="Cat on a keyboard"
          className="mx-auto"
        />
      );
    default:
      throw new ExhaustiveError(errorCode);
  }
};

const showErrorMessage = (errorCode: ErrorCode): string => {
  switch (errorCode) {
    case 404:
      return 'Page not found';
    case 500:
      return 'Internal Server Error';
    default:
      throw new ExhaustiveError(errorCode);
  }
};

const showErrorDescription = (errorCode: ErrorCode) => {
  switch (errorCode) {
    case 404:
      return 'Sorry, we couldn’t find the page you’re looking for😿';
    case 500:
      return 'Sorry, An unexpected error has occurred. Please try after a while😿';
    default:
      throw new ExhaustiveError(errorCode);
  }
};

export const ErrorTemplate = ({
  errorCode,
  resetFunc,
  children,
}: Props): JSX.Element => {
  return (
    <div className="flex h-screen flex-col bg-yellow-100">
      <Header enableLoginLink={false} />
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-6xl font-semibold leading-8 text-orange-500">
            {errorCode}
          </p>
          {showErrorImage(errorCode)}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {showErrorMessage(errorCode)}
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            {showErrorDescription(errorCode)}
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <div className="flex justify-center">{children ?? ''}</div>
          <div className="mt-10 flex justify-center">
            {errorCode === 404 ? <BackToTopLink /> : ''}
            {errorCode === 500 && resetFunc != null ? (
              <ErrorResetButton resetFunc={resetFunc} />
            ) : (
              ''
            )}
          </div>
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};
