import EventsSection from '../modules/eventsSection/EventsSection';
import Hero from '../modules/hero/Hero';
import NewsSection from '../modules/newsSection/NewsSection';
import OurTeams from '../modules/ourTeams/OurTeams';
import Schedule from '../modules/schedule/Schedule';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

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
