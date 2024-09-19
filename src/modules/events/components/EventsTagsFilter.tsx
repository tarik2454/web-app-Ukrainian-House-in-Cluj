import tagColors from '../../../constants/tag-colors';
import Button from '../../../shared/components/Button';

interface EventsTagsFilterProps {
  handleFilterTags: (filterTagName?: string, tag?: string) => void;
  handleResetFilter: () => void;
}

export default function EventsTagsFilter({
  handleFilterTags,
  handleResetFilter,
}: EventsTagsFilterProps) {
  const tagKeys = Object.keys(tagColors);

  return (
    <div className="flex justify-between items-center gap-4 mb-10 sticky top-[111px] bg-white dark:bg-dark-background">
      <p className="font-inter-600 font-semibold text-lg text-black-200 dark:text-dark-title">
        Сортувати:
      </p>

      <ul className="flex flex-wrap gap-2">
        {tagKeys.map(tag => {
          const { bgClass, textClass } = tagColors[tag] || {
            bgClass: 'bg-gray-500',
            textClass: 'text-white',
          };

          return (
            <li key={tag}>
              <button
                onClick={() => handleFilterTags(tag)}
                className={`px-[15px] py-[7px] rounded-md font-inter-500 font-medium text-sm ${textClass} ${bgClass}`}
              >
                {tag}
              </button>
            </li>
          );
        })}
      </ul>

      <Button
        styles={
          'px-[15px] py-[7px] rounded-md font-inter-500 font-medium text-sm bg-gray-100 text-black-200 hover:bg-gray-100 '
        }
        onClick={handleResetFilter}
      >
        скасувати
      </Button>
    </div>
  );
}
