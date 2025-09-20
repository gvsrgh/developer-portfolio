'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export default function Tag({ children, className, onClick, active = false }: TagProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 text-sm font-medium rounded-full transition-all duration-200';
  const interactiveClasses = onClick ? 'cursor-pointer hover:scale-105' : '';
  const stateClasses = active 
    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700';

  return (
    <span 
      className={cn(baseClasses, interactiveClasses, stateClasses, className)}
      onClick={onClick}
    >
      {children}
    </span>
  );
}