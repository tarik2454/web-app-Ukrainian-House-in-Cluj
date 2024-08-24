import Container from '../../shared/components/Container';
import Section from '../../shared/components/Section';
import SectionTitle from '../../shared/components/SectionTitle';
import NewsList from './components/NewsList';

export default function NewsSection({ mainPage }: { mainPage?: boolean }) {
  return (
    <Section>
      <Container>
        <SectionTitle>{mainPage ? 'Останні новини' : 'Новини'}</SectionTitle>
        <NewsList mainPage={mainPage} />
      </Container>
    </Section>
  );
}
