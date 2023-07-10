import { Footer, Header } from '@/app/_components';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

const NotFound = (): JSX.Element => {
  return (
    <div className="flex h-screen flex-col bg-yellow-100">
      <Header enableLoginLink={false} />
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-6xl font-semibold leading-8 text-orange-500">
            404
          </p>
          <Image
            src="/404.webp"
            width={300}
            height={300}
            alt="Cat in a Box"
            className="mx-auto"
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Sorry, we couldn’t find the page you’re looking for😿
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-orange-500 hover:text-orange-400"
              prefetch={false}
            >
              <span aria-hidden="true">&larr;Back to Top</span>
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
