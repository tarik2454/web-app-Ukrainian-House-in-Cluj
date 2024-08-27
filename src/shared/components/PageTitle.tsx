import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function PageTitle({
  children,
  styles,
  admin = false,
}: {
  children?: ReactNode;
  styles?: string;
  admin?: boolean;
}) {
  return (
    <h1
      className={twMerge(
        `mb-8 font-inter-600 text-2xl font-semibold text-black-200 
        ${
          admin
            ? 'font-inherit text-3xl font-bold tracking-tight text-gray-900'
            : ''
        }`,
        styles
      )}
    >
      {children}
    </h1>
  );
}
