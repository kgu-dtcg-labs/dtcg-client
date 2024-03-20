import { mocks } from '@mocks/mocks';
import type { ElementType, ElementWithChildrenType } from '@type/element';

/**
 * 레이어 ID를 받아서 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환하는 함수
 * @param layer 레이어 ID
 * @returns 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환
 */
export const treeParser = (layer: number) => {
  const findLayer = mocks.find((item) => item.id === layer);

  if (findLayer) {
    // Layer가 존재하다면 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환
    const children = mocks.filter((item) => item.parentId === layer);
    const result: ElementWithChildrenType = {
      ...findLayer,
      children: children.map((item) => {
        return {
          ...item,
          children: treeParser(item.id).children,
        };
      }),
    };

    return result;
  }

  return {} as ElementWithChildrenType;
};

export const createOneScenario = (cases: ElementType[]) => {
  const parentIds = [...new Set(cases.map((c) => c.parentId))]; // 모든 고유 parentId 추출
  const randomSelection = parentIds.map((pid) => {
    const filteredCases = cases.filter((c) => c.parentId === pid);
    return filteredCases[Math.floor(Math.random() * filteredCases.length)]; // 각 parentId에 대해 랜덤 선택
  });
  return randomSelection;
};
