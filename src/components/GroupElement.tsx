import { useState } from 'react';
import ElementLine from './ElementLine';
import Element from './Element';
import type { ElementType } from '@type/element';

interface Props extends React.PropsWithChildren {
  data: ElementType;
}

const GroupElement = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      type="button"
      id={`group-${data.value}`}
      className="relative flex items-center"
      onClick={handleIsOpen}
    >
      <ElementLine />
      <Element color="group" className="flex items-center">
        <span className="basis-1/6" />
        <span className="basis-4/6">{data.value}</span>
        <div className="basis-1/6">
          <div className="text-xs text-white bg-gray-400 rounded-full dark:bg-gray-400/80 size-4 dark:text-white/80">
            {isOpen ? '-' : '+'}
          </div>
        </div>
      </Element>
      {isOpen && <ElementLine />}
    </button>
  );
};

export default GroupElement;
