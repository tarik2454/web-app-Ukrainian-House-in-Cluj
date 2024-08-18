import eventsData from '../../../shared/data/events-data';

import { EventsCard } from '.';

export default function Events({
  mainPage,
  detailsPage,
}: {
  mainPage?: boolean;
  detailsPage?: boolean;
}) {
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

      <ul
        className={`flex flex-col gap-8 ${
          !detailsPage && !mainPage ? 'grid grid-cols-3' : ''
        }`}
      >
        {eventsData
          .slice(
            detailsPage ? 0 : 1,
            mainPage ? 4 : detailsPage ? 3 : eventsData.length
          )
          .map((news, index) => (
            <li
              key={index}
              className={`${!mainPage && !detailsPage ? 'flex' : ''}`}
            >
              <EventsCard
                id={news.id}
                title={news.title}
                img={news.img}
                description={news.description}
                tags={news.tags}
                date={news.date}
                mainPage={mainPage}
                detailsPage={detailsPage}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
