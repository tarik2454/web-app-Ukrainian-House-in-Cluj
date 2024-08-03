import eventsData from '../../shared/data/events-data';

import { Container, Section, SectionTitle } from '../../shared/components';
import { EventsList } from './components';

export default function AllEvents() {
  return (
    <Section>
      <Container>
        <SectionTitle>Останні події</SectionTitle>
        <div className="grid grid-cols-2 gap-8">
          <EventsList
            eventsData={eventsData}
            indexStart={0}
            indexEnd={1}
            singleEvent={true}
          />

          <EventsList
            eventsData={eventsData}
            indexStart={2}
            indexEnd={5}
            listEvents={true}
          />
        </div>
      </Container>
    </Section>
  );
}
