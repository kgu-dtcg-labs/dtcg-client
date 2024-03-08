import classNames from 'classnames';
import { PropsWithChildren, useCallback, useState } from 'react';
import ElementLine from '../ElementLine/ElementLine';
import Element from '../Element/Element';

interface CaseElementProps extends PropsWithChildren {}

const CaseElement = ({ children }: CaseElementProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleIsSelected = useCallback(() => {
    setIsSelected((prev) => !prev);
  }, []);

  return (
    <div id={`case-${children}`} className="relative flex items-center">
      <ElementLine />
      <Element
        color="case"
        className={classNames({
          '!border-orange-400 text-orange-400': isSelected,
        })}
        onClick={handleIsSelected}
      >
        {children}
      </Element>
    </div>
  );
};

export default CaseElement;
