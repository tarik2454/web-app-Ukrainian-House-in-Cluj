import { useEffect } from 'react';

import useScrollToTop from '../shared/hooks/useScrollToTop';
import Schedule from '../modules/schedule/Schedule';
import Breadcrumbs from '../shared/components/Breadcrumbs';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

export default function WorkSchedule() {
  const { scrollRough } = useScrollToTop();

  useEffect(() => {
    scrollRough();
  }, [scrollRough]);

  return (
    <PageWrapper>
      <Breadcrumbs />
      <PageTitle styles={'visually-hidden'}>Графік роботи</PageTitle>
      <Schedule />
    </PageWrapper>
  );
}
