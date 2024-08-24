import NewsSection from '../modules/newsSection/NewsSection';
import Breadcrumbs from '../shared/components/Breadcrumbs';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

export default function News() {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Новини</PageTitle>
      <NewsSection />
    </PageWrapper>
  );
}
