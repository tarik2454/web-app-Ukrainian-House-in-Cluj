import Schedule from '../modules/schedule/Schedule';
import Breadcrumbs from '../shared/components/Breadcrumbs';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

export default function WorkSchedule() {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Графік роботи</PageTitle>
      <Schedule />
    </PageWrapper>
  );
}
