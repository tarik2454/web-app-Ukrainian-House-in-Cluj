import { twMerge } from 'tailwind-merge';

import { useEvents } from '../../../hooks/useEvent';

import Pagination from '../../../shared/components/Pagination';
import EventsCard from './EventsCard';

import { EventDataProps } from '@/types/eventProps';

interface EventsProps {
  mainPage?: boolean;
  detailsPage?: boolean;
  selectedTag?: string;
}

export default function EventsList({
  mainPage = false,
  detailsPage,
  selectedTag,
}: EventsProps) {
  const { data: events, isLoading, isError } = useEvents();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading events</p>;

  const filteredEvents = selectedTag
    ? events.filter((event: EventDataProps) => event.tags.includes(selectedTag))
    : events;

  const itemsPerPage = 12;
  const startIndex = detailsPage ? 0 : 1;
  const endIndex = mainPage ? 4 : detailsPage ? 3 : filteredEvents.length;

  const slicedEvents = filteredEvents.slice(startIndex, endIndex);

  const renderItemLi = (item: EventDataProps) => (
    <li key={item.id} className="flex">
      <EventsCard
        product={item}
        mainPage={mainPage}
        detailsPage={detailsPage}
      />
    </li>
  );

  return (
    <>
      <div
        className={twMerge(
          mainPage ? 'grid grid-cols-[1.6fr_2fr] gap-8' : 'flex flex-col'
        )}
      >
        {mainPage && (
          <ul>
            {slicedEvents.slice(0, 1).map((product: EventDataProps) => (
              <li key={product.id}>
                <EventsCard product={product} mainPage singleEvent />
              </li>
            ))}
          </ul>
        )}

        {(mainPage || detailsPage) && (
          <ul className="flex flex-col gap-8">
            {slicedEvents.map((product: EventDataProps) => (
              <li key={product.id}>
                <EventsCard
                  product={product}
                  mainPage={mainPage}
                  detailsPage={detailsPage}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {!mainPage && !detailsPage && (
        <Pagination
          itemsPerPage={itemsPerPage}
          array={filteredEvents}
          stylesUl="flex flex-col gap-8 grid grid-cols-3"
          renderItemLi={renderItemLi}
        />
      )}
    </>
  );
}
