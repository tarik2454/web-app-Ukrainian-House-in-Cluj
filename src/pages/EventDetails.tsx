// import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import useScrollToTop from '../shared/hooks/useScrollToTop';

import EventId from '../modules/eventId/EventId';
import PageWrapper from '../shared/components/PageWrapper';
import Breadcrumbs from '../shared/components/Breadcrumbs';
import PageTitle from '../shared/components/PageTitle';
import Container from '../shared/components/Container';
import Section from '../shared/components/Section';
import SectionTitle from '../shared/components/SectionTitle';
import EventsList from '../modules/events/components/EventsList';

export default function EventDetails() {
  // const { eventId } = useParams();

  const { scrollRough } = useScrollToTop();

  useEffect(() => {
    scrollRough();
  }, [scrollRough]);

  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Подія</PageTitle>
      <Container>
        <div className="grid grid-cols-[_1fr,_3fr] gap-8">
          <Section>
            <SectionTitle>Останні події</SectionTitle>
            <EventsList detailsPage={true} />
          </Section>

          <EventId />
        </div>
      </Container>
    </PageWrapper>
  );
}
