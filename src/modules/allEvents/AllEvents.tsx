import { Container, Section, SectionTitle } from '../../shared/components';
import { EventsList } from './components';

export default function AllEvents({ mainPage }: { mainPage?: boolean }) {
  return (
    <Section>
      <Container>
        <SectionTitle>{mainPage ? 'Останні події' : 'Події'}</SectionTitle>
        <EventsList mainPage={mainPage} />
      </Container>
    </Section>
  );
}
