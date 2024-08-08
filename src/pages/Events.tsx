import { AllEvents } from '../modules';
import { PageTitle, PageWrapper } from '../shared/components';

export default function Events() {
  return (
    <PageWrapper>
      <PageTitle styles={'visually-hidden'}>Події</PageTitle>
      <AllEvents />
    </PageWrapper>
  );
}
