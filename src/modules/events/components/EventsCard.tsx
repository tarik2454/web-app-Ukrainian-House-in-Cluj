import { Link } from 'react-router-dom';
import { routes } from '../../../constants/routes';
import tagColors from '../../../constants/tag-colors';
import { twMerge } from 'tailwind-merge';

export interface CommonCardProps {
  product?: {
    id: string;
    title: string;
    img: string;
    description: string;
    tags: Array<string>;
    date: string;
  };
  singleEvent?: boolean;
  detailsPage?: boolean;
  mainPage?: boolean;
}

export default function EventsCard({
  product,
  singleEvent = false,
  detailsPage = false,
  mainPage = false,
}: CommonCardProps) {
  const { id, title, img, description, tags, date } = product || {};

  const eventUrl = id ? routes.EVENT_ID.path.replace(':eventId', id) : '#';

  const imgClass =
    singleEvent || detailsPage ? 'w-full h-full mb-5' : 'w-full h-full';
  const titleClass = singleEvent ? 'mb-3' : 'mb-2 text-lg';

  return (
    <div
      className={` ${
        singleEvent || detailsPage ? 'block' : 'grid grid-cols-[38%_1fr] gap-5'
      } ${!mainPage && !detailsPage ? '!flex !flex-col' : ''}`}
    >
      <Link to={eventUrl}>
        {img ? (
          <img className={imgClass} src={img} alt={title} />
        ) : (
          <div
            className={imgClass + ' bg-gray-300'}
            style={{ height: '150px' }}
          ></div>
        )}
      </Link>

      <div className="flex flex-col grow">
        <p className="mb-3 font-inter-600 text-sm font-semibold text-violet-300 dark:text-dark-date">
          {date || 'Date not available'}
        </p>

        <Link
          className="hover:underline hover:underline-offset-4"
          to={eventUrl}
        >
          <h3
            className={`font-inter-600 text-2xl font-semibold text-black-200 dark:text-dark-title ${titleClass}`}
          >
            {title || 'Title not available'}
          </h3>
        </Link>

        <div className="flex flex-col justify-between h-full">
          <Link
            className="hover:underline hover:underline-offset-4"
            to={eventUrl}
          >
            <p
              className={twMerge(
                'mb-6',
                singleEvent ? 'line-clamp-3' : 'line-clamp-2'
              )}
            >
              {description || 'Description not available'}
            </p>
          </Link>

          <ul className="flex gap-2">
            {Array.isArray(tags) && tags.length > 0 ? (
              tags.map((tag, index) => {
                const { bgClass, textClass } = tagColors[tag] || {
                  bgClass: 'bg-gray-500',
                  textClass: 'text-white',
                };
                return (
                  <li
                    key={index}
                    className={`px-[10px] py-[2px] rounded-md font-inter-500 font-medium text-sm ${textClass} ${bgClass}`}
                  >
                    {tag}
                  </li>
                );
              })
            ) : (
              <li className="px-[10px] py-[2px] rounded-md font-inter-500 font-medium text-sm bg-gray-500 text-white">
                No tags available
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
