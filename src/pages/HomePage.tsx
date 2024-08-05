import { AllEvents, AllNews, Hero, OurTeams } from '../modules';
import { PageWrapper } from '../shared/components';

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <AllNews />
      <AllEvents />
      <OurTeams />
    </PageWrapper>
  );
}
