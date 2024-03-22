import { useCallback, useState } from 'react';
import type { ElementWithChildrenType } from '@type/element';
import LayerElement from '../LayerElement/LayerElement';
import GroupElement from '../GroupElement/GroupElement';
import CaseElement from '../CaseElement/CaseElement';
import classNames from 'classnames';

interface ElementProps {
  isFirst: boolean;
  isLast?: boolean;
  data: ElementWithChildrenType;
  className?: string;
}

const ElementTree = ({
  isFirst = false,
  isLast = false,
  data,
  className,
}: ElementProps) => {
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
    <ul
      className={classNames(
        'flex border-l border-black dark:border-white/80 first:border-none last:border-none',
        className,
      )}
    >
      <li className="inline-block" onClick={handleOpen}>
        <RenderElement
          isFirst={isFirst}
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
              isFirst={index === 0}
            />
          ))}
      </li>
    </ul>
  );
};

export default ElementTree;
