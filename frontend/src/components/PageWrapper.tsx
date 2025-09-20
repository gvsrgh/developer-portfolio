'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  
  // Pages that don't need gaps (home and about)
  const noGapPages = ['/', '/about'];
  const shouldHaveGaps = !noGapPages.includes(pathname);
  
  return (
    <div className={shouldHaveGaps ? 'pt-8 pb-16' : ''}>
      {children}
    </div>
  );
}