import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";

import italianWhite from "../../assets/images/sponsors/italian-white.png";
import italianBlack from "../../assets/images/sponsors/italian.png";
import patrir from "../../assets/images/sponsors/patrir.png";
import unhcr from "../../assets/images/sponsors/unhcr.png";

export default function Sponsors() {
  return (
    <Section>
      <Container>
        <div className="flex w-full justify-center">
          <ul className="grid w-full grid-cols-3 items-end justify-center gap-8">
            <li className="w-1/2 justify-self-center pb-[1px]">
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
            <li className="w-1/2 justify-self-center">
              <img src={patrir} width="100%" height="60%" alt="Patrir" />
            </li>
            <li className="w-1/2 justify-self-center pb-[3px]">
              <img src={unhcr} width="100%" height="100%" alt="UNHCR" />
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
