import { NewsSection } from '../modules';
import { PageTitle, PageWrapper } from '../shared/components';

export default function News() {
  return (
    <PageWrapper>
      <PageTitle styles={'visually-hidden'}>Новини</PageTitle>
      <NewsSection />
    </PageWrapper>
  );
}
