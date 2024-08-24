import { twMerge } from 'tailwind-merge';

interface PropsButton {
  styles?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: (...args: unknown[]) => unknown;
  disabled?: boolean;
}

export default function Button({
  styles,
  type = 'button',
  children,
  onClick,
  disabled = false,
}: PropsButton) {
  return (
    <button
      type={type}
      className={twMerge(
        `w-fit px-4 py-2 text-white rounded-lg transition-all duration-250`,
        disabled ? 'bg-gray-400' : ' bg-ukraniane-via hover:bg-ukraniane-end',
        styles
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
