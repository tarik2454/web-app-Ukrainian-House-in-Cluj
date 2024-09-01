import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface FormItemProps<T extends FieldValues> {
  id?: string;
  type?: 'text' | 'email' | 'textarea' | 'date' | 'checkbox' | 'radio';
  labelText?: string;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  validation?: any;
  defaultChecked?: boolean;
  stylesField?: string;
}

export default function AdminFormItem<T extends FieldValues>({
  id,
  type,
  labelText,
  name,
  placeholder,
  register,
  error,
  validation,
  defaultChecked = true,
  stylesField,
}: FormItemProps<T>) {
  return (
    <div className={`${type === 'checkbox' ? 'flex items-center gap-3' : ''}`}>
      {labelText && (
        <label htmlFor={id} className="block mb-1">
          {labelText}
        </label>
      )}
      {type === 'text' && (
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          {...register(name, validation)}
          className={twMerge('input', stylesField)}
        />
      )}
      {type === 'email' && (
        <input
          type="email"
          id={id}
          placeholder={placeholder}
          {...register(name, validation)}
          className={twMerge('input', stylesField)}
        />
      )}
      {type === 'date' && (
        <input
          type="date"
          id={id}
          {...register(name, validation)}
          className={twMerge('input', stylesField)}
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={id}
          placeholder={placeholder}
          {...register(name, validation)}
          className={twMerge('textarea', stylesField)}
        />
      )}
      {type === 'checkbox' && (
        <input
          type="checkbox"
          id={id}
          {...register(name, validation)}
          defaultChecked={defaultChecked}
          className={stylesField}
        />
      )}
      {type === 'radio' && (
        <input
          type="radio"
          id={id}
          {...register(name, validation)}
          defaultChecked={defaultChecked}
          className={stylesField}
        />
      )}

      {error && <span className="error">{error.message}</span>}
    </div>
  );
}
