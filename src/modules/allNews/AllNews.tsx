import { Container, Section, SectionTitle } from '../../shared/components';
import { NewsList } from './components';

export default function AllNews({ mainPage }: { mainPage?: boolean }) {
  return (
    <Section>
      <Container>
        <SectionTitle>{mainPage ? 'Останні новини' : 'Новини'}</SectionTitle>
        <NewsList mainPage={mainPage} />
      </Container>
    </Section>
  );
}
