import { EventsDataProps } from '../types/types';

interface CommonCardProps extends EventsDataProps {
  singleEvent?: boolean;
  listEvents?: boolean;
  pageEvents?: boolean;
}

const tagColors: { [key: string]: string } = {
  література: 'bg-blue-500',
  ярмарок: 'bg-green-500',
  садівництво: 'bg-yellow-500',
  фотографія: 'bg-purple-500',
  технології: 'bg-purple-500',
  конференція: 'bg-purple-500',
  виставка: 'bg-blue-100 !text-blue-200',
  мистецтво: 'bg-blue-100 !text-blue-200',
  'майстер-клас': 'bg-blue-100 !text-blue-200',
  малювання: 'bg-teel-100 !text-teel-200',
  спорт: 'bg-orange-100 !text-orange-200',
  велопробіг: 'bg-gray-100 !text-gray-200',
  їжа: 'bg-violet-100 !text-violet-200',
  кулінарія: 'bg-red-100 !text-red-200',
  автомобілі: 'bg-pink-100 !text-pink-200',
  фестиваль: 'bg-green-100 !text-green-200',
};

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
