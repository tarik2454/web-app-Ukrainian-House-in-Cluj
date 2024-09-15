import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { Controller, FieldErrors, Control } from 'react-hook-form';
import { EventFormData } from '../pages/CreateEvent';

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
  name: keyof EventFormData;
  labelText?: string;
  stylesLabel?: string;
  control: Control<EventFormData>;
  errors: FieldErrors<EventFormData>;
  validation?: object;
  onChange?: (value: SingleValue<Option>) => void;
  placeholderText?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  labelText,
  id,
  name,
  stylesLabel,
  control,
  errors,
  validation,
  onChange,
  placeholderText = '...',
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const options: Option[] = Object.keys(tagColors).map(tag => ({
    value: tag,
    label: tag,
  }));

  return (
    <div className="w-full">
      {labelText && (
        <label
          htmlFor={id}
          className={twMerge('block mb-1 cursor-pointer', stylesLabel)}
          onClick={() => setMenuIsOpen(prev => !prev)}
        >
          {labelText}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            value={
              field.value
                ? options.find(option => option.value === field.value)
                : null
            }
            onChange={option => {
              field.onChange(option?.value ?? '');
              if (onChange) onChange(option);
            }}
            options={options}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            menuIsOpen={menuIsOpen}
            placeholder={placeholderText}
            classNames={{
              control: state =>
                classNames(
                  'input !min-h-0 !cursor-pointer',
                  state.isFocused && '!border-opacity-100'
                ),
              menu: () =>
                twMerge(
                  'w-full my-2 border-[1px] border-slate-300 rounded-default overflow-hidden absolute'
                ),
              option: state => {
                const colorClasses = tagColors[state.data.value];
                return classNames(
                  'px-4 py-2 border-b-[1px] border-slate-300 !cursor-pointer last:border-b-0',
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

              placeholder: () => classNames('text-inherit'),
            }}
            unstyled={true}
            menuPlacement={'auto'}
            maxMenuHeight={450}
          />
        )}
        rules={validation}
      />

      {errors[name]?.message && (
        <span className="error">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default Dropdown;
