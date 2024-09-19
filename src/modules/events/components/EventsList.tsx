import Pagination from '../../../shared/components/Pagination';
import eventsData from '../../../shared/data/events-data';
import EventsCard from './EventsCard';

import { EventsDataProps } from '../types/eventProps';
import { twMerge } from 'tailwind-merge';

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
  // Фильтруем события по выбранному тегу, если тег выбран
  const filteredEventsData = selectedTag
    ? eventsData.filter(event => event.tags.includes(selectedTag))
    : eventsData;

  // Устанавливаем элементы, которые будут отображены в зависимости от страницы
  const itemsPerPage = 12;
  const startIndex = detailsPage ? 0 : 1;
  const endIndex = mainPage ? 4 : detailsPage ? 3 : filteredEventsData.length;

  // Вырезаем данные после фильтрации
  const sliceEventsData = filteredEventsData.slice(startIndex, endIndex);

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
    <>
      <div
        className={twMerge(
          mainPage ? 'grid grid-cols-[1.6fr_2fr] gap-8' : 'flex flex-col'
        )}
      >
        {mainPage && (
          <ul>
            {sliceEventsData.slice(0, 1).map((product, index) => (
              <li key={index}>
                <EventsCard
                  product={product}
                  mainPage={mainPage}
                  singleEvent={true}
                />
              </li>
            ))}
          </ul>
        )}

        {(mainPage || detailsPage) && (
          <ul className="flex flex-col gap-8">
            {sliceEventsData.map((product, index) => (
              <li key={index}>
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
          array={filteredEventsData}
          stylesUl={'flex flex-col gap-8 grid grid-cols-3'}
          renderItemLi={renderItemLi}
        />
      )}
    </>
  );
}
