import type { PropsWithChildren } from 'react';
import type { ElementType } from '@type/element';
import Element from './Element';
import ElementLine from './ElementLine';

interface Props extends PropsWithChildren {
  data: ElementType;
}

const LayerElement = ({ data }: Props) => {
  return (
    <div id={`layer-${data.value}`} className="flex items-center">
      <Element color="layer">{data.value}</Element>
      <ElementLine />
    </div>
  );
};

export default LayerElement;
