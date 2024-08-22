import { NewsSection } from '../modules';
import { Breadcrumbs, PageTitle, PageWrapper } from '../shared/components';

export default function News() {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Новини</PageTitle>
      <NewsSection />
    </PageWrapper>
  );
}
