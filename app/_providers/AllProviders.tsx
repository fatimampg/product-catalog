'use client';

import UIProviders from './NextUIProvider';
import { AuthProvider } from './AuthProvider';
import { CategoryProvider } from './CategoryProvider';

export const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UIProviders>
      <CategoryProvider>
        <AuthProvider>{children}</AuthProvider>
      </CategoryProvider>
    </UIProviders>
  );
};

export default AllProviders;
