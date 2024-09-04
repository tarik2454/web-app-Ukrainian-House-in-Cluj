import { useEffect } from 'react';

import useScrollToTop from '../shared/hooks/useScrollToTop';
import About from '../modules/about/About';
import Breadcrumbs from '../shared/components/Breadcrumbs';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

export default function AboutUs() {
  const { scrollRough } = useScrollToTop();

  useEffect(() => {
    scrollRough();
  }, [scrollRough]);

  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Про нас</PageTitle>
      <About />
    </PageWrapper>
  );
}
