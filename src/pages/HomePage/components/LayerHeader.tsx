import { LAYER_LIST } from '@/data/element';
import clsx from 'clsx';

export interface LayerHeaderProps {
  layer: number;
  onClick: (layer: number) => void;
}

const LayerHeader = ({ layer, onClick }: LayerHeaderProps) => {
  return (
    <ul className="flex w-full overflow-auto divide-x cursor-pointer select-none text-nowrap scrollbar-hide">
      {LAYER_LIST.map((el) => (
        <li
          key={el.id}
          className={clsx(
            'w-full text-center py-1 px-4 font-medium text-sm first:rounded-l last:rounded-r border-y first:border-l last:!border-r transition-colors',
            el.id === layer
              ? 'bg-orange-400 text-white dark:bg-orange-400/80 '
              : 'text-gray-500 dark:text-white/80 dark:bg-zinc-600 hover:bg-orange-400/40',
          )}
          onClick={() => onClick(el.id)}
        >
          <p>Layer{el.id}</p>
          <p>{el.value}</p>
        </li>
      ))}
    </ul>
  );
};

export default LayerHeader;
