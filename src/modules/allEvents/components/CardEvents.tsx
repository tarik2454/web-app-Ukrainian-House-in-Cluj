import tagColors from '../helpers/tag-colors';
import { EventsDataProps } from '../types/types';

interface CommonCardProps extends EventsDataProps {
  singleEvent?: boolean;
  listEvents?: boolean;
  pageEvents?: boolean;
}

export default function CardEvents({
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
        <div className={`${singleEvent ? 'mb-3' : 'mb-3'}`}>{date}</div>
        <h3 className={`${singleEvent ? 'mb-3' : 'mb-2'}`}>{title}</h3>
        <p className={`${singleEvent ? 'mb-6' : 'mb-6'}`}>{description}</p>
        <ul className="flex gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`px-3 py-1 rounded-md text-white ${
                tagColors[tag] || 'bg-gray-500'
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
