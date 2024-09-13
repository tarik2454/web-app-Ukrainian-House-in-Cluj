import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const tagColors: {
  [key: string]: { bgClass: string; textClass: string };
} = {
  виставка: { bgClass: 'bg-fuchsia-50', textClass: 'text-fuchsia-700' },
  мистецтво: { bgClass: 'bg-stone-100', textClass: 'text-stone-700' },
  'майстер-клас': { bgClass: 'bg-blue-100', textClass: 'text-blue-700' },
  малювання: { bgClass: 'bg-teal-100', textClass: 'text-teal-700' },
  освіта: { bgClass: 'bg-orange-100', textClass: 'text-orange-700' },
  спорт: { bgClass: 'bg-gray-100', textClass: 'text-gray-700' },
  їжа: { bgClass: 'bg-violet-100', textClass: 'text-violet-700' },
  юрист: { bgClass: 'bg-red-100', textClass: 'text-red-700' },
  мова: { bgClass: 'bg-pink-100', textClass: 'text-pink-700' },
  психологія: { bgClass: 'bg-green-100', textClass: 'text-green-700' },
  інше: { bgClass: 'bg-cyan-50', textClass: 'text-cyan-800' },
};

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  onChange: (selectedOption: SingleValue<Option>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = Object.keys(tagColors).map(tag => ({
    value: tag,
    label: tag,
  }));

  const handleChange = (newValue: SingleValue<Option>) => {
    setSelectedOption(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-full">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        classNames={{
          control: state =>
            classNames(
              'input !cursor-pointer',
              state.isFocused && 'border-opacity-100'
            ),
          menu: () =>
            twMerge(
              'w-full my-[14px] border-[1px] border-slate-300 rounded-default overflow-hidden absolute'
            ),
          option: state => {
            const colorClasses = tagColors[state.data.value];
            return classNames(
              'px-4 py-2 cursor-pointer',
              colorClasses?.bgClass,
              colorClasses?.textClass
            );
          },
          singleValue: state => {
            const colorClasses = tagColors[state.data.value];
            return classNames(
              'flex items-center rounded',
              colorClasses?.bgClass,
              colorClasses?.textClass
            );
          },
        }}
        unstyled={true}
        menuPlacement={'auto'}
        maxMenuHeight={450}
      />
    </div>
  );
};

export default Dropdown;
