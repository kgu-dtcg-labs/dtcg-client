type CommonElement = {
  id: number;
  type: 'layer' | 'group' | 'case';
  value: string;
  isIncludeResultTable: boolean;
  parentId: number | null;
};

type LayerElement = CommonElement & {
  type: 'layer';
  parentId: null;
};

type GroupElement = CommonElement & {
  type: 'group';
  parentId: number;
};

type CaseElement = CommonElement & {
  type: 'case';
  parentId: number;
  name: string;
  layer: number;
  content?: string;
};

export type ElementType = LayerElement | GroupElement | CaseElement;

/**
 * 한 요소가 가진 자식
 */
export type ElementWithChildrenType = ElementType & {
  children: ElementWithChildrenType[];
};

/**
 * 한개의 테스트 케이스
 */
export type TestCase = { description: string; cases: ElementType[][] };

/**
 * 아크릴 통신에 사용되는 response의 형식
 */
export interface ResponseDataType {
  r: number;
  result: {
    [key: string]: {
      [property: string]: string[];
    };
  };
}

/**
 * 시나리오 결과를 파싱할 때, 한 요소의 구성
 */
export interface ParsedElement {
  [key: string]: string | number;
}

/**
 * 시나리오 결과를 파싱할 때, 전체 요소
 */
export type ParsedTestCasesLayer = Record<string, ParsedElement[] | string>;
