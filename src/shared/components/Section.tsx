import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Section({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: string;
}) {
  return (
    <section className={twMerge(`pt-[30px] pb-[30px]`, styles)}>
      {children}
    </section>
  );
}
