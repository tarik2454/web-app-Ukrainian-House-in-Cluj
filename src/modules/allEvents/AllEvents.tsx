import { Container, Section, SectionTitle } from '../../shared/components';
import { EventsList, EventsTagsFilter } from './components';

export default function AllEvents({ mainPage }: { mainPage?: boolean }) {
  return (
    <Section>
      <Container>
        <SectionTitle>{mainPage ? 'Останні події' : 'Події'}</SectionTitle>

        {mainPage ? (
          <EventsList mainPage={mainPage} />
        ) : (
          <>
            <EventsTagsFilter />
            <EventsList />
          </>
        )}
      </Container>
    </Section>
  );
}
