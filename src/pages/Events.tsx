import EventsSection from '../modules/eventsSection/EventsSection';
import Breadcrumbs from '../shared/components/Breadcrumbs';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

export default function Events() {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Події</PageTitle>
      <EventsSection />
    </PageWrapper>
  );
}
