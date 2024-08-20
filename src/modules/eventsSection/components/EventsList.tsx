import eventsData from '../../../shared/data/events-data';

import { EventsCard } from '.';
import { Pagination } from '../../../shared/components';

import { EventsDataProps } from '../types/eventProps';

export default function Events({
  mainPage,
  detailsPage,
}: {
  mainPage?: boolean;
  detailsPage?: boolean;
}) {
  const sliceEventsData = eventsData.slice(
    detailsPage ? 0 : 1,
    mainPage ? 4 : detailsPage ? 3 : eventsData.length
  );
  const itemsPerPage = 12;

  const renderItemLi = (item: EventsDataProps) => (
    <li key={item.id} className="flex">
      <EventsCard
        product={item}
        mainPage={mainPage ?? false}
        detailsPage={detailsPage ?? false}
      />
    </li>
  );

  return (
    <div className="flex flex-row gap-8">
      {mainPage ? (
        <ul>
          {eventsData.slice(0, 1).map((product, index) => (
            <li key={index}>
              <EventsCard
                product={product}
                mainPage={mainPage}
                singleEvent={true}
              />
            </li>
          ))}
        </ul>
      ) : null}

      {mainPage || detailsPage ? (
        <ul className="flex flex-col gap-8">
          {eventsData.slice(1, 4).map((product, index) => (
            <li key={index}>
              <EventsCard
                product={product}
                mainPage={mainPage}
                detailsPage={detailsPage}
              />
            </li>
          ))}
        </ul>
      ) : null}

      {!mainPage && !detailsPage ? (
        <Pagination
          itemsPerPage={itemsPerPage}
          array={sliceEventsData}
          stylesUl={'flex flex-col gap-8 mb-[50px] grid grid-cols-3'}
          renderItemLi={renderItemLi}
        />
      ) : null}
    </div>
  );
}
