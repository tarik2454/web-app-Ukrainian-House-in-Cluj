import tagColors from '../helpers/tag-colors';
import { EventsDataProps } from '../types/types';

interface CommonCardProps extends EventsDataProps {
  singleEvent?: boolean;
  listEvents?: boolean;
  pageEvents?: boolean;
}

export default function EventsCard({
  title,
  img,
  description,
  tags,
  date,
  singleEvent = false,
}: // listEvents = false,
// pageEvents = false,
CommonCardProps) {
  return (
    <div
      className={`${singleEvent ? 'block' : 'grid grid-cols-[40%_1fr] gap-6'}`}
    >
      <img
        className={`${singleEvent ? 'w-full h-full mb-8' : 'w-full h-full'}`}
        src={img}
        alt={title}
      />

      <div>
        <p
          className={`font-inter-600 text-sm font-semibold text-violet-300 ${
            singleEvent ? 'mb-3' : 'mb-3'
          }`}
        >
          {date}
        </p>
        <h3
          className={`font-inter-600 text-2xl font-semibold text-black-200 ${
            singleEvent ? 'mb-3' : 'mb-2 text-lg'
          }`}
        >
          {title}
        </h3>
        <p className={`${singleEvent ? 'mb-6' : 'mb-6'}`}>{description}</p>
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
  );
}
