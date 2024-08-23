import { Container, Section, SectionTitle } from '../../shared/components';
import { EventsList, EventsTagsFilter } from './components';

interface EventsSectionProps {
  mainPage?: boolean;
}

export default function EventsSection({ mainPage }: EventsSectionProps) {
  const handleFilterTags = (tagName: string): void => {
    console.log('Filtering by tag:', tagName);
  };

  return (
    <Section>
      <Container>
        <SectionTitle>{mainPage ? 'Останні події' : 'Події'}</SectionTitle>

        {mainPage ? (
          <EventsList mainPage={mainPage} />
        ) : (
          <>
            <EventsTagsFilter handleFilterTags={handleFilterTags} />
            <EventsList handleFilterTags={handleFilterTags} />
          </>
        )}
      </Container>
    </Section>
  );
}
