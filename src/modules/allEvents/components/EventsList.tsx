import { CardEvents } from './';
import { EventsListProps } from '../types/types';

export default function EventsList({
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
          <CardEvents
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
