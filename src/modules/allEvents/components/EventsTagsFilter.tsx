import tagColors from '../helpers/tag-colors';

export default function EventsTagsFilter() {
  return (
    <div className="flex items-center gap-4 mb-10 sticky top-[111px] bg-white dark:bg-dark-background">
      <p className="font-inter-600 font-semibold text-lg text-black-200 dark:text-dark-title">
        Сортувати за тегом:{' '}
      </p>

      <ul className="flex flex-wrap gap-2">
        {Object.keys(tagColors).map(tag => (
          <li key={tag}>
            <button
              className={`px-[15px] py-[7px] rounded-md font-inter-500 font-medium text-sm text-white ${
                tagColors[tag] || 'bg-gray-500'
              }`}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
