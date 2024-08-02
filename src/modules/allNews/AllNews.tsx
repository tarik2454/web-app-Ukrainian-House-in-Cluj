import newsData from '../../shared/data/news-data';

import {
  CardNews,
  Container,
  Section,
  SectionTitle,
} from '../../shared/components';

export default function AllNews() {
  return (
    <Section>
      <Container>
        <SectionTitle>Останні новини</SectionTitle>
        <ul className="columns-2">
          {newsData.slice(0, 10).map((news, index) => {
            const { title, description } = news;
            return (
              <li key={index}>
                <CardNews title={title} description={description} />
              </li>
            );
          })}

          {newsData.slice(10, 20).map((news, index) => {
            const { title, description } = news;
            return (
              <li key={index}>
                <CardNews title={title} description={description} />
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
