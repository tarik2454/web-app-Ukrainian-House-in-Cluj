import { Link } from 'react-router-dom';
import tagColors from '../helpers/tag-colors';
import { EventsDataProps } from '../types/event-types';
import routes from '../../../constants/routes';

interface CommonCardProps extends EventsDataProps {
  singleEvent?: boolean;
  detailsPage?: boolean;
  mainPage?: boolean;
}

export default function EventsCard({
  id,
  title,
  img,
  description,
  tags,
  date,
  singleEvent = false,
  detailsPage = false,
}: CommonCardProps) {
  const eventUrl = routes.EVENT_ID.replace(':eventId', id);

  return (
    <Link to={eventUrl}>
      <div
        className={`${
          singleEvent || detailsPage
            ? 'block'
            : 'grid grid-cols-[40%_1fr] gap-6'
        }`}
      >
        <img
          className={`${
            singleEvent || detailsPage ? 'w-full h-full mb-6' : 'w-full h-full'
          }`}
          src={img}
          alt={title}
        />

        <div>
          <p className="mb-3 font-inter-600 text-sm font-semibold text-violet-300">
            {date}
          </p>
          <h3
            className={`font-inter-600 text-2xl font-semibold text-black-200 ${
              singleEvent ? 'mb-3' : 'mb-2 text-lg'
            }`}
          >
            {title}
          </h3>

          <p className="mb-6">{description}</p>

          <ul className="flex gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className={`px-[10px] py-[2px] rounded-md font-inter-500 font-medium text-sm text-white ${
                  tagColors[tag] || 'bg-gray-500'
                }`}
              >
                <a href="#">{tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
