import { PropsWithChildren } from 'react';
import { ElementType } from '@type/element';
import Element from '../Element/Element';
import ElementLine from '../ElementLine/ElementLine';

interface LayerElementProps extends PropsWithChildren {
  isFirst: boolean;
  isLast?: boolean;
  length?: number;
  data: ElementType;
}

const LayerElement = ({ data }: LayerElementProps) => {
  return (
    <div id={`layer-${data.name}`} className="flex items-center">
      <Element color="layer">{data.name}</Element>
      <ElementLine />
    </div>
  );
};

export default LayerElement;
