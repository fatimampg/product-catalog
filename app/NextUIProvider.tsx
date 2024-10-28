'use client';

import { NextUIProvider } from '@nextui-org/react';

const UIProviders = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default UIProviders;
