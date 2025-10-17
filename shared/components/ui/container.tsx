import { cn } from '@/shared/lib/clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl', className)}>{children}</div>
  );
};
