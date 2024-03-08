import { PropsWithChildren } from 'react';
import Element from '../Element/Element';
import ElementLine from '../ElementLine/ElementLine';

interface LayerElementProps extends PropsWithChildren {
  isLast?: boolean;
  length?: number;
}

const LayerElement = ({ children }: LayerElementProps) => {
  return (
    <div id={`layer-${children}`} className="flex items-center">
      <Element color="layer">{children}</Element>
      <ElementLine />
    </div>
  );
};

export default LayerElement;
