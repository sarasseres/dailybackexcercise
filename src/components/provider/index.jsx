'use client';

import { NextUIProvider } from '@nextui-org/react';

export const Provider = ({ children }) => {
  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>;
};
