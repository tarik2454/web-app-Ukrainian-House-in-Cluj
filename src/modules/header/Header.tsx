// import { useEffect, useRef } from 'react';
import { Container, Logo, NavBar } from '../../shared/components';
import { ThemeToggle } from './components';

export default function Header() {
  // const headerRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (headerRef.current) {
  //     console.log(headerRef.current.clientHeight);
  //   }
  // }, []);

  return (
    <header
      // ref={headerRef}
      className="w-full py-[30px] border-b-[1px] border-gray-300 bg-background-color fixed top-0 left-0 z-50"
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
