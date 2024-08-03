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
        <ul className="grid grid-cols-2 gap-8">
          {newsData.slice(0, 3).map((news, index) => {
            const { title, description, date } = news;
            return (
              <li key={index}>
                <CardNews title={title} description={description} date={date} />
              </li>
            );
          })}

          {newsData.slice(3, 6).map((news, index) => {
            const { title, description, date } = news;
            return (
              <li key={index}>
                <CardNews title={title} description={description} date={date} />
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
