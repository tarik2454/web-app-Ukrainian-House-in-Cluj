import {
  Schedule,
  Hero,
  OurTeams,
  NewsSection,
  EventsSection,
} from '../modules';
import { PageTitle, PageWrapper } from '../shared/components';

export default function HomePage() {
  return (
    <PageWrapper>
      <PageTitle styles={'visually-hidden'}>Домашня сторiнка</PageTitle>
      <Hero />
      <NewsSection mainPage={true} />
      <Schedule mainPage={true} />
      <EventsSection mainPage={true} />
      <OurTeams />
    </PageWrapper>
  );
}
