import Link from 'next/link';

export function BackToTopLink(): JSX.Element {
  return (
    <Link
      href="/"
      className="text-sm font-semibold leading-6 text-orange-500 hover:text-orange-400"
      prefetch={false}
    >
      <span aria-hidden="true">&larr;Back to Top</span>
    </Link>
  );
}
