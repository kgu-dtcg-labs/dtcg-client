import classNames from 'classnames';
import { PropsWithChildren, useCallback, useState } from 'react';
import ElementLine from '../ElementLine/ElementLine';
import Element from '../Element/Element';
import { ElementType } from '@type/element';

interface CaseElementProps extends PropsWithChildren {
  data: ElementType;
}

const CaseElement = ({ data }: CaseElementProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleIsSelected = useCallback(() => {
    setIsSelected((prev) => !prev);
  }, []);

  return (
    <div id={`case-${data.name}`} className="relative flex items-center">
      <ElementLine />
      <Element
        color="case"
        className={classNames({
          '!border-orange-400 text-orange-400': isSelected,
        })}
        onClick={handleIsSelected}
      >
        {data.name}
      </Element>
    </div>
  );
};

export default CaseElement;
