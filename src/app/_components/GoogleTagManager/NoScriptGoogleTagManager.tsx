import type { JSX } from 'react';
import { googleTagManagerId } from './googleTagManagerId';

export const NoScriptGoogleTagManager = (): JSX.Element => {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId()}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
};
