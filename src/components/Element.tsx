import clsx from 'clsx';

const COLORS = {
  layer: 'bg-sky-200 dark:bg-sky-200/80',
  group: 'bg-gray-200 dark:bg-gray-200/80',
  case: 'bg-white border-[1.5px] border-gray-300 dark:bg-white/80',
} as const;

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'layer' | 'group' | 'case';
  selected?: boolean;
}

const Element = ({
  color = 'case',
  className,
  children,
  selected = false,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        'h-10 text-sm font-semibold rounded-lg w-36 dark:text-gray-800/80',
        { '!border-orange-400 text-orange-400': selected },
        COLORS[color],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Element;
