import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SectionTitle({
  children,
  styles,
}: {
  children?: ReactNode;
  styles?: string;
}) {
  return (
    <h2
      className={twMerge(
        `mb-8 font-inter-600 text-2xl font-semibold text-black-200 dark:text-dark-title`,
        styles
      )}
    >
      {children}
    </h2>
  );
}
