import { EventsSection } from '../modules';
import { Breadcrumbs, PageTitle, PageWrapper } from '../shared/components';

export default function Events() {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Події</PageTitle>
      <EventsSection />
    </PageWrapper>
  );
}
