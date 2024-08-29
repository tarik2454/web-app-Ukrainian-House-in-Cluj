import { useState } from 'react';
import Section from '../../shared/components/Section';
import Container from '../../shared/components/Container';
import SectionTitle from '../../shared/components/SectionTitle';
import EventsTagsFilter from './components/EventsTagsFilter';
import EventsList from './components/EventsList';

interface EventsSectionProps {
  mainPage?: boolean;
}

export default function Events({ mainPage }: EventsSectionProps) {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);

  const handleFilterTags = (tagName?: string): void => {
    console.log('Filtering by tag:', tagName);
    setSelectedTag(tagName);
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
            <EventsList selectedTag={selectedTag} />
          </>
        )}
      </Container>
    </Section>
  );
}
