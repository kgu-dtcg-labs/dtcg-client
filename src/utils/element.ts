import { memoCases, mocks } from '@mocks/mocks';
import { RandomType } from '@type/common';
import type {
  ElementType,
  ElementWithChildrenType,
  responseDataType,
} from '@type/element';
import { AxiosResponse } from 'axios';

/**
 * 레이어 ID를 받아서 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환하는 함수
 * @param layer 레이어 ID
 * @returns 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환
 */
export function treeParser(layer: number): ElementWithChildrenType {
  const findLayer = mocks.find((item) => item.id === layer);

  if (findLayer) {
    // Layer가 존재하다면 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환
    const children = mocks.filter((item) => item.parentId === layer);
    const result = {
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
}

/**
 * 주어진 경우의 목록에서 각 고유한 parentId를 기준으로 하나의 시나리오를 생성합니다.
 * 각 parentId에 대해 해당하는 경우들 중에서 하나를 랜덤으로 선택하여 시나리오를 구성합니다.
 *
 * @param {ElementType[]} cases - 시나리오를 생성하기 위한 경우들의 배열.
 * 각 경우는 `parentId` 속성을 포함해야 합니다.
 * @returns {ElementType[]} 랜덤으로 선택된 각 parentId에 대한 경우들의 배열.
 */
export function createOneScenario(
  cases: ElementType[],
  type: RandomType,
): ElementType[] {
  const parentIds = [...new Set(cases.map((c) => c.parentId as number))]; // 모든 고유 parentId 추출
  const randomSelection = parentIds.map((pid) => {
    const filteredCases =
      type === '랜덤'
        ? memoCases[pid]
        : cases.filter((c) => c.parentId === pid);
    return filteredCases[Math.floor(Math.random() * filteredCases.length)]; // 각 parentId에 대해 랜덤 선택
  });
  return randomSelection;
}

/**
 * 주어진 경우의 목록으로부터 여러 개의 시나리오를 생성합니다.
 * 각 시나리오는 각 고유한 parentId에 대해 해당하는 경우들 중 하나를 랜덤으로 선택하여 구성됩니다.
 *
 * @param {ElementType[]} cases - 시나리오를 생성하기 위한 경우들의 배열.
 * 각 경우는 `parentId` 속성을 포함해야 합니다.
 * @param {number} numberOfScenarios - 생성할 시나리오의 수.
 * @returns {ElementType[][]} 생성된 시나리오들의 배열. 각 시나리오는 ElementType 배열입니다.
 */
export function createMultipleScenarios(
  cases: ElementType[],
  numberOfScenarios: number,
  type: RandomType,
): ElementType[][] {
  const scenarios = [];
  for (let i = 0; i < numberOfScenarios; i++) {
    scenarios.push(createOneScenario(cases, type));
  }
  return scenarios;
}

export function matchingCaseWithResponse(
  res: AxiosResponse<responseDataType>,
): ElementType[] {
  const result: ElementType[] = [];

  // responseData에서 모든 값을 추출하여 배열로 변환
  let searchValues: string[] = [];
  Object.values(res.data.result).forEach((item) => {
    Object.values(item).forEach((value) => {
      if (Array.isArray(value) && value.length > 0) {
        searchValues = [...searchValues, ...value];
      }
    });
  });

  // mocks 배열을 순회하며 name이 searchValues에 포함되는지 확인
  mocks.forEach((mock) => {
    if (searchValues.includes(mock.name) && mock.type === 'case') {
      result.push(mock);
    }
  });

  console.log(result);
  return result;
}
