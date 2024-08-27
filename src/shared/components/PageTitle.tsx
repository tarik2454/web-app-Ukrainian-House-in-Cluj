import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function PageTitle({
  children,
  styles,
}: {
  children?: ReactNode;
  styles?: string;
}) {
  return (
    <h1
      className={twMerge(
        `mb-8 font-inter-600 text-2xl font-semibold text-black-200`,
        styles
      )}
    >
      {children}
    </h1>
  );
}
