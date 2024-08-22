import { Schedule } from '../modules';
import { Breadcrumbs, PageTitle, PageWrapper } from '../shared/components';

export default function WorkSchedule() {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Графік роботи</PageTitle>
      <Schedule />
    </PageWrapper>
  );
}
