import { useEffect } from 'react';

import useScrollToTop from '../shared/hooks/useScrollToTop';
import News from '../modules/news/News';
import Breadcrumbs from '../shared/components/Breadcrumbs';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

export default function NewsPage() {
  const { scrollRough } = useScrollToTop();

  useEffect(() => {
    scrollRough();
  }, [scrollRough]);

  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Новини</PageTitle>
      <News />
    </PageWrapper>
  );
}
