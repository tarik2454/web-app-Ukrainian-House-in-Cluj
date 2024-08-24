import { useEffect, useRef } from 'react';
import Section from '../../shared/components/Section';
import Container from '../../shared/components/Container';

export default function Hero() {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      console.log(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className="border-b-[1px] border-gray-300 dark:border-dark-border"
    >
      <Section>
        <Container>
          <h1 className="text-ukraine-gradient animate-waving-flag font-inter-700 text-[170px] font-bold text-center">
            Ukraine House
          </h1>
        </Container>
      </Section>
    </div>
  );
}
