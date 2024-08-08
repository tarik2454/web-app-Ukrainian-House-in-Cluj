import { AllEvents, Schedule, AllNews, Hero, OurTeams } from '../modules';
import { PageTitle, PageWrapper } from '../shared/components';

export default function HomePage() {
  return (
    <PageWrapper>
      <PageTitle styles={'visually-hidden'}>Домашня сторiнка</PageTitle>
      <Hero />
      <AllNews mainPage={true} />
      <Schedule mainPage={true} />
      <AllEvents mainPage={true} />
      <OurTeams />
    </PageWrapper>
  );
}
