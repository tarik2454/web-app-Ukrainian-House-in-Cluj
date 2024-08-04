import { Container, IconsBlock, Logo } from '../../shared/components';

export default function Footer() {
  return (
    <footer className="py-[30px] border-t-[1px] border-gray-300">
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
