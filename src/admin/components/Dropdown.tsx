import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { Controller, FieldErrors, Control } from 'react-hook-form';

import tagColors from '../../constants/tag-colors';
import EventFormData from '../../types/event-form-data';

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
