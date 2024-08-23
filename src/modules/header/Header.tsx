import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Logo, NavBar } from '../../shared/components';
import { ThemeToggle } from './components';
import routes from '../../constants/routes';

export default function Header() {
  const [position, setPosition] = useState('absolute');

  const headerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // useEffect(() => {
  //   if (headerRef.current) {
  //     console.log(headerRef.current.offsetHeight);
  //   }
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        location.pathname === routes.ROOT.path
          ? window.scrollY > 427
          : window.scrollY > 111
      ) {
        setPosition('fixed');
      } else {
        setPosition('absolute');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className={`w-full py-[30px] border-b-[1px] border-gray-300 bg-background ${position} top-0 left-0 z-50 transition-all dark:border-dark-border dark:bg-dark-background`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <NavBar />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
