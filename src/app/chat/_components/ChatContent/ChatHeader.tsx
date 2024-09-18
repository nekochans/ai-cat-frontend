import type { JSX } from 'react';
import Image from 'next/image';

export function ChatHeader(): JSX.Element {
  return (
    <div className="flex justify-between border-b-2 border-amber-200 bg-yellow-200 py-3 sm:items-center">
      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <Image
            src="/cats/moko.webp"
            // TODO width, heightの指定方法をどうするか後で考える
            width={330}
            height={400}
            alt="もこちゃん"
            className="size-10 rounded-full sm:size-16"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="mt-1 flex items-center text-2xl">
            <span className="mr-3 text-gray-900">もこちゃん</span>
          </div>
          <span className="text-lg text-gray-800">チンチラシルバー</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {/* Buttonとかを並べるエリア */}
      </div>
    </div>
  );
}
