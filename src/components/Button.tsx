import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'default' | 'blue' | 'black' | 'disabled' | 'red';
  icon?: React.ReactNode;
}

const COLORS = {
  default:
    'border-gray-500 text-gray-500 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-500/20',
  black:
    'border-black bg-black text-white hover:bg-gray-900 dark:text-white/80 dark:hover:bg-gray-900',
  blue: 'border-blue-500 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-500/20',
  red: 'border-red-500 bg-red-500 text-white hover:bg-red-900 dark:text-white/80 dark:hover:bg-red-900',
  disabled: 'border bg-gray-200 text-white cursor-not-allowed',
} as const;

export const Button = ({
  children,
  className,
  color = 'default',
  icon,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        'border rounded py-1.5 px-2 transition-colors text-nowrap',
        { 'flex items-center justify-center gap-1': icon },
        COLORS[color],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
