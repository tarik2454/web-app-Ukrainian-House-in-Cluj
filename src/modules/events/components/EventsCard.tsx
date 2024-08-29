import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import tagColors from '../helpers/tag-colors';
import { routes } from '../../../constants/routes';

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

  return (
    <div
      className={`
          ${
            singleEvent || detailsPage
              ? 'block'
              : 'grid grid-cols-[38%_1fr] gap-5'
          } 
          ${!mainPage && !detailsPage ? '!flex !flex-col' : ''}
        `}
    >
      <Link to={eventUrl}>
        {img ? (
          <img
            className={`${
              singleEvent || detailsPage
                ? 'w-full h-full mb-5'
                : 'w-full h-full'
            }`}
            src={img}
            alt={title}
          />
        ) : (
          <Skeleton
            className={`${
              singleEvent || detailsPage
                ? 'w-full h-full mb-5'
                : 'w-full h-full'
            }`}
            height={singleEvent || detailsPage ? 300 : 150}
          />
        )}
      </Link>

      <div className="flex flex-col grow">
        <p
          className="mb-3 font-inter-600 text-sm font-semibold text-violet-300 
        dark:text-dark-date"
        >
          {date || <Skeleton width={100} />}
        </p>

        <Link
          className="hover:underline hover:underline-offset-4"
          to={eventUrl}
        >
          <h3
            className={`font-inter-600 text-2xl font-semibold text-black-200 dark:text-dark-title ${
              singleEvent ? 'mb-3' : 'mb-2 text-lg'
            }`}
          >
            {title || <Skeleton width={200} />}
          </h3>
        </Link>

        <div className="flex flex-col justify-between h-full">
          <Link
            className="hover:underline hover:underline-offset-4"
            to={eventUrl}
          >
            <p className="mb-6">{description || <Skeleton count={3} />}</p>
          </Link>

          <ul className="flex gap-2">
            {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <li
                  key={index}
                  className={`px-[10px] py-[2px] rounded-md font-inter-500 font-medium text-sm text-white ${
                    tagColors[tag] || 'bg-gray-500'
                  }`}
                >
                  {tag}
                </li>
              ))
            ) : (
              <Skeleton width={80} height={30} count={3} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
