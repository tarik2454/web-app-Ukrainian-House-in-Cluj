interface FormItemProps {
  id?: string;
  type?: 'text' | 'email';
  labelText?: string;
  name?: string;
  placeholder?: string;
}

export default function FormItem({
  id,
  type,
  labelText,
  name,
  placeholder,
}: FormItemProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1">
        {labelText}
      </label>

      <div className="">
        {type === 'text' && (
          <input
            type="text"
            id={id}
            name={name}
            className="input"
            placeholder={placeholder}
            autoComplete="off"
          />
        )}
        {type === 'email' && (
          <input
            type="email"
            id={id}
            name={name}
            className="input"
            placeholder={placeholder}
            autoComplete="off"
          />
        )}
      </div>
    </div>
  );
}
