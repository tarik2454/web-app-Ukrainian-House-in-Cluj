import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Section({
  children,
  stylesWrapper,
}: {
  children: ReactNode;
  stylesWrapper?: string;
}) {
  return (
    <section className={twMerge(`py-[30px]`, stylesWrapper)}>
      {children}
    </section>
  );
}
