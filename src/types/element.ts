export type ElementTypeType = 'layer' | 'group' | 'case';

export interface ElementType {
  id: number;
  type: ElementTypeType;
  name: string;
  parentId: number | null;
}

export interface ElementWithChildrenType extends ElementType {
  children: ElementWithChildrenType[];
}
