import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="pt-[110px] pb-[30px]">{children}</div>;
}
