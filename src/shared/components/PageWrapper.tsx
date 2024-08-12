import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PageWrapperProps {
  children: ReactNode;
  styles?: string;
}

export default function PageWrapper({ children, styles }: PageWrapperProps) {
  return (
    <div className={twMerge('pt-[110px] pb-[30px]', styles)}>{children}</div>
  );
}
