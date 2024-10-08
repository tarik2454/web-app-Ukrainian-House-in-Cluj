import { useEffect } from 'react';

import useScrollToTop from '../shared/hooks/useScrollToTop';
import Events from '../modules/events/Events';
import Breadcrumbs from '../shared/components/Breadcrumbs';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

export default function EventsPage() {
  const { scrollRough } = useScrollToTop();

  useEffect(() => {
    scrollRough();
  }, [scrollRough]);

  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Події</PageTitle>
      <Events />
    </PageWrapper>
  );
}
