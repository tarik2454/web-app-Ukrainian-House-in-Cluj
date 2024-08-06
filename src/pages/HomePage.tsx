import { AllEvents, Schedule, AllNews, Hero, OurTeams } from '../modules';
import { PageWrapper } from '../shared/components';

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <AllNews />
      <Schedule mainPage={true} />
      <AllEvents />
      <OurTeams />
    </PageWrapper>
  );
}
