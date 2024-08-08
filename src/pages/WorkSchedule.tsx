import { Schedule } from '../modules';
import { PageTitle, PageWrapper } from '../shared/components';

export default function WorkSchedule() {
  return (
    <PageWrapper>
      <PageTitle styles={'visually-hidden'}>Графік роботи</PageTitle>
      <Schedule />
    </PageWrapper>
  );
}
