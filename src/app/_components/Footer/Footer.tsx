import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

export const Footer = (): JSX.Element => {
  return (
    <footer className="m-4 rounded-lg bg-yellow-200 shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="mb-4 flex items-center sm:mb-0">
            <Image
              src="/footer-service-icon.svg"
              width={180}
              height={40}
              alt="AI Meow Cat"
            />
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-800">
            <li>
              <Link
                href="/"
                prefetch={false}
                className="mr-4 hover:underline md:mr-6"
              >
                Top
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                prefetch={false}
                className="mr-4 hover:underline md:mr-6"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                prefetch={false}
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-amber-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span className="block text-sm text-gray-900 sm:text-center dark:text-gray-800">
          Copyright (c){' '}
          <a href="https://github.com/nekochans" className="hover:underline">
            nekochans
          </a>
        </span>
      </div>
    </footer>
  );
};
