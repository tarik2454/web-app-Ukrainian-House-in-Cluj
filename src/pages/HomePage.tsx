import { AllEvents, AllNews, Hero, OurTeams } from '../modules';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AllNews />
      <AllEvents />
      <OurTeams />
    </>
  );
}
