import { useEffect, useRef } from 'react';

import Container from '../../shared/components/Container';
import IconsBlock from '../../shared/components/IconsBlock';
import Logo from '../../shared/components/Logo';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (footerRef.current) {
      console.log(footerRef.current.offsetHeight);
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-[30px] border-t-[1px] border-gray-300 dark:border-dark-border"
    >
      <Container>
        <>
          <div className="flex justify-between justify-items-start">
            <div className="flex flex-col gap-3">
              <Logo />
              <p>&copy;2024 Your Company Name. All rights reserved.</p>
            </div>

            <address className="flex flex-col gap-3">
              <span>Клуж-Напока вул. Напока, 25</span>
              <a href="tel:+40773702016">+40773702016</a>
              <span>пн-пт: 9:00 - 18:00</span>
            </address>

            <IconsBlock />
          </div>
        </>
      </Container>
    </footer>
  );
}
