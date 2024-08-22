// import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { EventId } from '../modules';
import { EventsList } from '../modules/eventsSection/components';
import {
  Breadcrumbs,
  Container,
  PageTitle,
  PageWrapper,
  Section,
  SectionTitle,
} from '../shared/components';

export default function EventDetails() {
  // const { eventId } = useParams();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

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
