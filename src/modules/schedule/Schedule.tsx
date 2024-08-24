import Container from '../../shared/components/Container';
import Section from '../../shared/components/Section';
import SectionTitle from '../../shared/components/SectionTitle';
import ScheduleList from './components/ScheduleList';

interface ScheduleProps {
  mainPage?: boolean;
}

export default function Schedule({ mainPage }: ScheduleProps) {
  return (
    <Section>
      <Container>
        <SectionTitle>Графік роботи</SectionTitle>
        <ScheduleList mainPage={mainPage} />
      </Container>
    </Section>
  );
}
