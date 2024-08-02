import {
  CardEvents,
  Container,
  Section,
  SectionTitle,
} from '../../shared/components';

import eventsData from '../../shared/data/events-data';

export default function AllEvents() {
  return (
    <Section>
      <Container>
        <SectionTitle>Останні події</SectionTitle>
        <ul className="columns-2">
          {eventsData.slice(0, 10).map((news, index) => {
            const { title, img, description, tags } = news;
            return (
              <li key={index}>
                <CardEvents
                  title={title}
                  img={img}
                  description={description}
                  tags={tags}
                />
              </li>
            );
          })}

          {eventsData.slice(10, 20).map((news, index) => {
            const { title, img, description, tags } = news;
            return (
              <li key={index}>
                <CardEvents
                  title={title}
                  img={img}
                  description={description}
                  tags={tags}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
