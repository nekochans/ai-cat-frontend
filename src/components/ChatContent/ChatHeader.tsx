import Image from 'next/image';
import type { JSX } from 'react';

export const ChatHeader = (): JSX.Element => {
  return (
    <div className="flex justify-between border-b-2 border-amber-200 bg-yellow-200 py-3 sm:items-center">
      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <Image
            src="https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp"
            // TODO width, heightの指定方法をどうするか後で考える
            width={330}
            height={400}
            alt="もこちゃん"
            className="h-10 w-10 rounded-full sm:h-16 sm:w-16"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="mt-1 flex items-center text-2xl">
            <span className="mr-3 text-gray-700">もこちゃん</span>
          </div>
          <span className="text-lg text-gray-600">チンチラシルバー</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {/* Buttonとかを並べるエリア */}
      </div>
    </div>
  );
};
