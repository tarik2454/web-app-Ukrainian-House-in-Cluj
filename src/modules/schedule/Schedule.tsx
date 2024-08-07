import { Container, Section, SectionTitle } from '../../shared/components';
import { ScheduleList } from './components';

interface ScheduleProps {
  mainPage?: boolean;
}

export default function Schedule({ mainPage }: ScheduleProps) {
  return (
    <div className="">
      <Section>
        <Container>
          <SectionTitle>Графік роботи</SectionTitle>
          <ScheduleList mainPage={mainPage} />
        </Container>
      </Section>
    </div>
  );
}
