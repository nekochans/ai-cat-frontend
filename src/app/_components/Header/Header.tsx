'use client';

import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { type JSX, useState } from 'react';

const navigation = [
  { name: 'terms', href: '/terms' },
  { name: 'privacy', href: '/privacy' },
  { name: 'external transmission', href: '/external-transmission-policy' },
];

type Props = {
  enableLoginLink: boolean;
};

export function Header({ enableLoginLink }: Props): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-yellow-200">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" prefetch={false} passHref className="-m-1.5 p-1.5">
            <span className="sr-only">AI Meow Cat</span>
            <Image
              src="/header-service-icon.svg"
              height={50}
              width={50}
              alt="AI Meow Cat"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              prefetch={false}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {enableLoginLink
            ? (
                <Link
                  href="/login"
                  prefetch={false}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in
                  {' '}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              )
            : (
                ''
              )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-yellow-100 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" prefetch={false} passHref className="-m-1.5 p-1.5">
              <span className="sr-only">AI Meow Cat</span>
              <Image
                src="/header-service-icon.svg"
                height={50}
                width={50}
                alt="AI Meow Cat"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={false}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {enableLoginLink
                ? (
                    <div className="py-6">
                      <Link
                        href="/login"
                        prefetch={false}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-50"
                      >
                        Log in
                      </Link>
                    </div>
                  )
                : (
                    ''
                  )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
