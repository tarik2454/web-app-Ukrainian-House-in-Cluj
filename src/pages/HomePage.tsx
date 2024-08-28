import Events from '../modules/events/Events';
import Hero from '../modules/hero/Hero';
import News from '../modules/news/News';
import OurTeams from '../modules/ourTeams/OurTeams';
import Schedule from '../modules/schedule/Schedule';
import PageTitle from '../shared/components/PageTitle';
import PageWrapper from '../shared/components/PageWrapper';

export default function HomePage() {
  return (
    <PageWrapper>
      <PageTitle styles={'visually-hidden'}>Домашня сторiнка</PageTitle>
      <Hero />
      <News mainPage={true} />
      <Schedule mainPage={true} />
      <Events mainPage={true} />
      <OurTeams />
    </PageWrapper>
  );
}
