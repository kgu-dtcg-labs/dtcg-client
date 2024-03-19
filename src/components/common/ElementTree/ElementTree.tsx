import { useCallback, useState } from 'react';
import type { ElementWithChildrenType } from '@type/element';
import LayerElement from '../LayerElement/LayerElement';
import GroupElement from '../GroupElement/GroupElement';
import CaseElement from '../CaseElement/CaseElement';

interface ElementProps {
  isLast?: boolean;
  data: ElementWithChildrenType;
}

const ElementTree = ({ isLast = false, data }: ElementProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  let RenderElement = null;

  switch (data.type) {
    case 'layer':
      RenderElement = LayerElement;
      break;
    case 'group':
      RenderElement = GroupElement;
      break;
    case 'case':
      RenderElement = CaseElement;
      break;
  }

  return (
    <ul className="flex border-l border-black dark:border-white/80 first:border-none last:border-none">
      <li className="inline-block" onClick={handleOpen}>
        <RenderElement
          data={data}
          isLast={isLast}
          length={data.children.length}
        />
      </li>
      <li className="inline-block space-y-4">
        {open &&
          data.children.length > 0 &&
          data.children.map((child, index) => (
            <ElementTree
              key={child.id}
              data={child}
              isLast={data.children.length === index + 1}
            />
          ))}
      </li>
    </ul>
  );
};

export default ElementTree;
