import { About } from '../modules';
import { PageTitle, PageWrapper } from '../shared/components';

export default function AboutUs() {
  return (
    <PageWrapper>
      <PageTitle styles={'visually-hidden'}>Про нас</PageTitle>
      <About />
    </PageWrapper>
  );
}
