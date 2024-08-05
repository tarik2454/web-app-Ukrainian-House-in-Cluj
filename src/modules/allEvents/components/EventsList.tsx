import { EventsCard } from '.';
import { EventsListProps } from '../types/types';

export default function ListEvents({
  eventsData,
  indexStart = 0,
  indexEnd = 1,
  singleEvent = false,
  listEvents = false,
  pageEvents = false,
}: EventsListProps) {
  return (
    <ul className={`${listEvents ? 'flex flex-col gap-8' : ''}`}>
      {eventsData.slice(indexStart, indexEnd).map((news, index) => (
        <li key={index}>
          <EventsCard
            title={news.title}
            img={news.img}
            description={news.description}
            tags={news.tags}
            date={news.date}
            singleEvent={singleEvent}
            listEvents={listEvents}
            pageEvents={pageEvents}
          />
        </li>
      ))}
    </ul>
  );
}
