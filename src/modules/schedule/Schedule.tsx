import { Container, Section, SectionTitle } from '../../shared/components';
import { ScheduleList } from './components';

interface ScheduleProps {
  mainPage?: boolean;
}

export default function Schedule({ mainPage }: ScheduleProps) {
  return (
    <div className="bg-blue-100">
      <Section>
        <Container>
          <SectionTitle>Графік роботи</SectionTitle>
          <ScheduleList mainPage={mainPage} />
        </Container>
      </Section>
    </div>
  );
}
