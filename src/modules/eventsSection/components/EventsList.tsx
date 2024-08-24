import eventsData from '../../../shared/data/events-data';
import { EventsCard } from '.';
import { Pagination } from '../../../shared/components';
import { EventsDataProps } from '../types/eventProps';

interface EventsProps {
  mainPage?: boolean;
  detailsPage?: boolean;
  selectedTag?: string; // Пропс для выбранного тега
}

export default function Events({
  mainPage,
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
    <div className="flex flex-row gap-8">
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

      {!mainPage && !detailsPage && (
        <Pagination
          itemsPerPage={itemsPerPage}
          array={filteredEventsData} // Передаём отфильтрованные данные
          stylesUl={'flex flex-col gap-8 mb-[50px] grid grid-cols-3'}
          renderItemLi={renderItemLi}
        />
      )}
    </div>
  );
}
