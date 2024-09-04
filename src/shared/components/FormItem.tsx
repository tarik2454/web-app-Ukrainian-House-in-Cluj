import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
  Controller,
  Control,
} from 'react-hook-form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import ua from 'react-phone-number-input/locale/ua';

interface FormItemProps<T extends FieldValues> {
  id?: string;
  type?: 'text' | 'email' | 'textarea' | 'tel' | 'date';
  labelText?: string;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  control: Control<T>;
}

export default function FormItem<T extends FieldValues>({
  id,
  type,
  labelText,
  name,
  placeholder,
  register,
  error,
  control,
}: FormItemProps<T>) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1">
        {labelText}
      </label>
      {type === 'text' && (
        <input
          type="text"
          id={id}
          className="input"
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      {type === 'email' && (
        <input
          type="email"
          id={id}
          className="input"
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      {type === 'tel' && (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <PhoneInput
              aria-label="Ваш номер телефону"
              international
              countryCallingCodeEditable={false}
              maxLength="50"
              defaultCountry="UA"
              flags={flags}
              labels={ua}
              value={field.value}
              onChange={value => field.onChange(value)}
              // className="input"
              placeholder={placeholder}
            />
          )}
        />
      )}
      {type === 'date' && (
        <input type="date" id={id} className="input" {...register(name)} />
      )}
      {type === 'textarea' && (
        <textarea
          id={id}
          className="textarea"
          placeholder={placeholder}
          {...register(name)}
        />
      )}

      {error && <span className="error">{error.message}</span>}
    </div>
  );
}
