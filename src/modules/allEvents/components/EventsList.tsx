import eventsData from '../../../shared/data/events-data';

import { EventsCard } from '.';

export default function ListEvents({ mainPage }: { mainPage?: boolean }) {
  return (
    <div className="flex flex-row gap-8">
      {mainPage ? (
        <ul className="">
          {eventsData.slice(0, 1).map((news, index) => (
            <li key={index}>
              <EventsCard
                id={news.id}
                title={news.title}
                img={news.img}
                description={news.description}
                tags={news.tags}
                date={news.date}
                mainPage={mainPage}
                singleEvent={true}
              />
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="flex flex-col gap-8">
        {eventsData
          .slice(1, mainPage ? 4 : eventsData.length)
          .map((news, index) => (
            <li key={index}>
              <EventsCard
                id={news.id}
                title={news.title}
                img={news.img}
                description={news.description}
                tags={news.tags}
                date={news.date}
                mainPage={mainPage}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
