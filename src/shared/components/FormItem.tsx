import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from 'react-hook-form';

interface FormItemProps<T extends FieldValues> {
  id?: string;
  type?: 'text' | 'email' | 'textarea' | 'date';
  labelText?: string;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
}

export default function FormItem<T extends FieldValues>({
  id,
  type,
  labelText,
  name,
  placeholder,
  register,
  error,
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
          // autoComplete="off"
          {...register(name)}
        />
      )}
      {type === 'email' && (
        <input
          type="email"
          id={id}
          className="input"
          placeholder={placeholder}
          // autoComplete="off"
          {...register(name)}
        />
      )}
      {type === 'date' && (
        <input
          type="date"
          id={id}
          className="input"
          // autoComplete="off"
          {...register(name)}
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={id}
          className="textarea"
          placeholder={placeholder}
          // autoComplete="off"
          {...register(name)}
        />
      )}

      {error && (
        <span className="mt-[2px] text-red-700 text-sm">{error.message}</span>
      )}
    </div>
  );
}
