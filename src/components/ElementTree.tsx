import { type PropsWithChildren, useState } from 'react';
import LayerElement from './LayerElement';
import GroupElement from './GroupElement';
import CaseElement from './CaseElement';
import clsx from 'clsx';
import type { ElementWithChildrenType } from '@type/element';

export interface ElementProps {
  className?: string;
  data: ElementWithChildrenType;
}

const ElementTree = ({ className, data }: ElementProps) => {
  const [open, setOpen] = useState(true);

  const handleOpenClick = () => {
    setOpen((prev) => !prev);
  };

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
      className={clsx(
        'flex border-l dark:border-white/20',
        data.type === 'layer' && 'border-none',
        className,
      )}
    >
      <li className="inline-block" onClick={handleOpenClick}>
        <RenderElement data={data} />
      </li>
      <li className="inline-block space-y-4">
        {open &&
          data.children.length > 0 &&
          data.children.map((child) => (
            <ElementTree key={child.id} data={child} />
          ))}
      </li>
    </ul>
  );
};

const ElementTreeWrapper = ({ children }: PropsWithChildren) => (
  <div className="px-3.5 py-10 mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600">
    {children}
  </div>
);

export { ElementTree, ElementTreeWrapper };
