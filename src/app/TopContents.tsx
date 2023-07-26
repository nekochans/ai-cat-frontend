import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

export const TopContents = (): JSX.Element => {
  return (
    <div className="relative isolate bg-yellow-100 pt-14">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AI Meow Cat
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ねこの人格を持ったAIとお話ができます🐱分からない事を何でも聞いてみよう！
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/chat/moko"
                prefetch={false}
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                はじめる
              </Link>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/app-screenshot.webp"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
