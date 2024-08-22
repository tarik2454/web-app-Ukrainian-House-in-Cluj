import { About } from '../modules';
import { Breadcrumbs, PageTitle, PageWrapper } from '../shared/components';

export default function AboutUs() {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Про нас</PageTitle>
      <About />
    </PageWrapper>
  );
}
