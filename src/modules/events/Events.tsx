import { useState } from 'react';
import Section from '../../shared/components/Section';
import Container from '../../shared/components/Container';
import SectionTitle from '../../shared/components/SectionTitle';
import EventsTagsFilter from './components/EventsTagsFilter';
import EventsList from './components/EventsList';
import useScrollToTop from '../../shared/hooks/useScrollToTop';

interface EventsSectionProps {
  mainPage?: boolean;
}

export default function Events({ mainPage }: EventsSectionProps) {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);

  const { scrollSmooth } = useScrollToTop();

  const handleFilterTags = (tagName?: string): void => {
    setSelectedTag(tagName);
    scrollSmooth();
  };

  const handleResetFilter = () => {
    setSelectedTag(undefined);
    scrollSmooth();
  };

  return (
    <Section>
      <Container>
        <SectionTitle>{mainPage ? 'Останні події' : 'Події'}</SectionTitle>

        {mainPage ? (
          <EventsList mainPage={mainPage} />
        ) : (
          <>
            <EventsTagsFilter
              handleFilterTags={handleFilterTags}
              handleResetFilter={handleResetFilter}
            />
            <EventsList selectedTag={selectedTag} />
          </>
        )}
      </Container>
    </Section>
  );
}
