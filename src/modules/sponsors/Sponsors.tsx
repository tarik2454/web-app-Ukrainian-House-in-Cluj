import Container from '../../shared/components/Container';
import Section from '../../shared/components/Section';

import italianWhite from '../../assets/images/sponsors/italian-white.png';
import italianBlack from '../../assets/images/sponsors/italian.png';
import patrir from '../../assets/images/sponsors/patrir.png';
import unhcr from '../../assets/images/sponsors/unhcr.png';

export default function Sponsors() {
  return (
    <Section>
      <Container>
        <div className="flex justify-center w-full">
          <ul className="grid grid-cols-3 justify-center items-end gap-8 w-full">
            <li className="justify-self-center pb-[1px] w-1/2">
              <img
                src={italianBlack}
                className="dark:hidden"
                width="100%"
                height="100%"
                alt="Italian"
              />
              <img
                src={italianWhite}
                className="hidden dark:block"
                width="100%"
                height="100%"
                alt="Italian"
              />
            </li>
            <li className="justify-self-center w-1/2">
              <img src={patrir} width="100%" height="60%" alt="Patrir" />
            </li>
            <li className=" justify-self-center pb-[3px] w-1/2">
              <img src={unhcr} width="100%" height="100%" alt="UNHCR" />
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
