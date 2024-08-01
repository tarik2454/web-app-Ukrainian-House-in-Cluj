import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-8 md:px-8 xl:px-28">{children}</div>
  );
}
