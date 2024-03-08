import { LAYER_LIST } from '@constants/element';
import classNames from 'classnames';

interface LayerHeaderProps {
  layer: number;
  onClick: (layer: number) => void;
}

const LayerHeader = ({ layer, onClick }: LayerHeaderProps) => {
  return (
    <ul className="flex w-full overflow-auto divide-x cursor-pointer text-nowrap scrollbar-hide">
      {LAYER_LIST.map((item) => (
        <li
          key={item.layer}
          className={classNames(
            'w-full text-center py-1 px-4 font-medium text-sm first:rounded-l last:rounded-r border-y first:border-l last:!border-r transition-colors ease-in-out',
            item.layer === layer ? 'bg-orange-400 text-white' : 'text-gray-500',
          )}
          onClick={() => onClick(item.layer)}
        >
          <p>Layer{item.layer}</p>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default LayerHeader;
