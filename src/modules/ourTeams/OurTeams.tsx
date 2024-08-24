import teamData from '../../shared/data/team-data';
import Slider from '../../shared/components/Slider';
import Section from '../../shared/components/Section';
import Container from '../../shared/components/Container';
import SectionTitle from '../../shared/components/SectionTitle';

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
