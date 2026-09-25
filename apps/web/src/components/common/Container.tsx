import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16', className)}>
      {children}
    </div>
  );
}
