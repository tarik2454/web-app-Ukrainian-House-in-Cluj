import { Container, Logo, NavBar } from '../../shared/components';
import { ThemeToggle } from './components';

export default function Header() {
  return (
    <header className="py-[30px]">
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
