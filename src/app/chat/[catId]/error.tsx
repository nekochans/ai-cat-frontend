'use client';

import { Footer, Header } from '@/app/_components';
import Image from 'next/image';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ reset }: Props): JSX.Element => {
  return (
    <div className="flex h-screen flex-col bg-yellow-100">
      <Header enableLoginLink={false} />
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-6xl font-semibold leading-8 text-orange-500">
            500
          </p>
          <Image
            src="/500.webp"
            width={300}
            height={300}
            alt="Cat on a keyboard"
            className="mx-auto"
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Internal Server Error
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Sorry, An unexpected error has occurred. Please try after a while.😿
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <div className="mt-10 flex justify-center">
            <button
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={reset}
            >
              もう一度試す
            </button>
          </div>
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Error;
