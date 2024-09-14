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
  id?: string;
  onChange: (selectedOption: SingleValue<Option>) => void;
  labelText?: string;
  stylesLabel?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  onChange,
  labelText,
  id,
  stylesLabel,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const options: Option[] = Object.keys(tagColors).map(tag => ({
    value: tag,
    label: tag,
  }));

  const handleChange = (newValue: SingleValue<Option>) => {
    setSelectedOption(newValue);
    onChange(newValue);
  };

  const handleLabelClick = () => {
    setMenuIsOpen(prev => !prev);
  };

  return (
    <div className="w-full">
      {labelText && (
        <label
          htmlFor={id}
          className={twMerge('block mb-1 cursor-pointer', stylesLabel)}
          onClick={handleLabelClick}
        >
          {labelText}
        </label>
      )}

      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        menuIsOpen={menuIsOpen}
        classNames={{
          control: state =>
            classNames(
              'input !min-h-0 !cursor-pointer',
              state.isFocused && '!border-opacity-100'
            ),
          menu: () =>
            twMerge(
              'w-full my-[14px] border-[1px] border-slate-300 rounded-default overflow-hidden absolute'
            ),
          option: state => {
            const colorClasses = tagColors[state.data.value];
            return classNames(
              'px-4 py-2 !cursor-pointer',
              colorClasses?.bgClass,
              colorClasses?.textClass,
              state.isSelected && ''
            );
          },
          singleValue: state => {
            const colorClasses = tagColors[state.data.value];
            return classNames(
              'flex items-center rounded pl-2',
              colorClasses?.bgClass,
              colorClasses?.textClass
            );
          },
          placeholder: () => classNames('text-red-700', 'font-semibold'),
        }}
        unstyled={true}
        menuPlacement={'auto'}
        maxMenuHeight={450}
      />
    </div>
  );
};

export default Dropdown;
