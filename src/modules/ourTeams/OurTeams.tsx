import { Container, Section, SectionTitle } from '../../shared/components';
import teamData from '../../shared/data/team-data';
import Slider from '../../shared/components/Slider';

export default function OurTeams() {
  return (
    <Section>
      <Container>
        <SectionTitle>Наша командa</SectionTitle>
        <Slider data={teamData} />
      </Container>
    </Section>
  );
}
