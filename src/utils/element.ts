import { ParsedElement } from './../types/element';
import { elementData, memoCases } from '@mocks/elementData';
import { RandomType } from '@type/common';
import type {
  ElementType,
  ElementWithChildrenType,
  ParsedTestCasesLayer,
  TestCase,
  responseDataType,
} from '@type/element';
import { AxiosResponse } from 'axios';

/**
 * 레이어 ID를 받아서 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환하는 함수
 * @param layer 레이어 ID
 * @returns 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환
 */
export function treeParser(layer: number): ElementWithChildrenType {
  const findLayer = elementData.find((item) => item.id === layer);

  if (findLayer) {
    // Layer가 존재하다면 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환
    const children = elementData.filter((item) => item.parentId === layer);
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
 * 주어진 경우의 목록에서 각 고유한 parentId를 기준으로 여러 개의 시나리오를 생성합니다.
 * 각 시나리오는 각 고유한 parentId에 대해 해당하는 경우들 중 하나를 랜덤으로 선택하여 구성됩니다.
 *
 * @param {ElementType[]} cases - 시나리오를 생성하기 위한 경우들의 배열. 각 경우는 `parentId` 속성을 포함해야 합니다.
 * @param {number} numberOfScenarios - 생성할 시나리오의 수. 기본값은 1입니다.
 * @param {RandomType} type - 랜덤 선택 방식 ('랜덤' 또는 다른 값).
 * @returns {Promise<TestCase[]>} 생성된 시나리오들의 배열. 각 시나리오는 ElementType 배열입니다.
 */
export async function createTestCases(
  cases: ElementType[],
  numberOfScenarios: number = 1,
  type: RandomType,
  description: string,
): Promise<TestCase> {
  const parentIds = [
    ...new Set(cases.filter((c) => c.parentId !== null).map((c) => c.parentId)),
  ];

  const scenarios = await Promise.all(
    new Array(numberOfScenarios).fill(null).map(async () => {
      return await Promise.all(
        parentIds.map(async (pid) => {
          const filteredCases =
            type === '랜덤'
              ? memoCases[pid!]
              : cases.filter((c) => c.parentId === pid);
          return filteredCases[
            Math.floor(Math.random() * filteredCases.length)
          ];
        }),
      );
    }),
  );

  const result = { description: description, cases: scenarios };

  return result;
}

/**
 * 입력받은 데이터를 아크릴 측으로 전송합니다
 */
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
  elementData.forEach((item) => {
    if (searchValues.includes(item.value) && item.type === 'case') {
      result.push(item);
    }
  });

  console.log(result);
  return result;
}

/**
 * @description 시나리오를 Layer 별로, Layer 내에서는 시나리오 별로 파싱하는 함수입니다.
 * @param {TestCase} scenarios - 각 요소가 layer, name, value를 포함하는 2차원 배열.
 * @returns {ParsedScenarioLayer} - 레이어 번호를 키로 갖는 객체, 각 레이어는 시나리오 데이터를 포함하는 배열을 포함합니다.
 */
export function parseTestCasesByLayer(scenarios: TestCase): string {
  const result: ParsedTestCasesLayer = {};

  const descriptionKey = 'tc_description';

  if (scenarios.description) {
    result[descriptionKey] = scenarios.description;
  } else {
    result[descriptionKey] = '설명 없음';
  }

  for (let i = 0; i < scenarios.cases.length; i++) {
    const scenario = scenarios.cases[i];

    for (let j = 0; j < scenario.length; j++) {
      const element = scenario[j];
      const layer = element.layer;

      if (layer !== undefined) {
        const layerKey = `layer${layer}DTOs`;
        if (!result[layerKey]) {
          result[layerKey] = [];
        }

        const layerArray = result[layerKey] as ParsedElement[];
        if (!result[layerKey][i]) {
          layerArray[i] = {};
        }
        layerArray[i][element.name || '-'] = element.value || '-';
      }
    }
  }

  const resultJson = JSON.stringify(result, null, 2);
  console.log(resultJson);

  return resultJson;
}
