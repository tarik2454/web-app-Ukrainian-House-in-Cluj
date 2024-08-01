import { Container, Logo } from '../../shared/components';
import { SpriteSVG } from '../../img/SpriteSVG';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="">
          <div className="flex justify-between">
            <Logo />

            <address className="flex flex-col">
              <span>Клуж-Напока вул. Напока, 25</span>
              <a href="tel:+40773702016">+40773702016</a>
              <span>пн-пт: 9:00 - 18:00</span>
            </address>

            <div className="flex gap-4 px-4 py-2 bg-black-300">
              <a href="#">
                <SpriteSVG name="sun" />
              </a>
              <a href="#">
                <SpriteSVG name="moon" />
              </a>
              <a href="#">
                <SpriteSVG name="sun" />
              </a>
            </div>
          </div>

          <p className="">&copy;2024 Your Company Name. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
