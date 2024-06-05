import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import type { ElementType } from '@type/element';

/**
 * 결과 상태를 관리하는 atom입니다.
 * @type {import('recoil').RecoilState<ElementType[][]>}
 */
const resultState = atom<ElementType[][]>({
  key: 'result',
  default: [],
});

/**
 * 시나리오 생성 결과 상태를 가져오고 설정합니다.
 * @returns {[ElementType[][], (newState: ElementType[][]) => void]} 현재 상태와 상태를 업데이트하는 함수.
 */
export const useResultStore = () => useRecoilState(resultState);

/**
 * 시나리오 생성 결과 상태의 현재 값을 가져옵니다.
 * @returns {ElementType[][]} 결과 상태의 현재 값.
 */
export const useGetResultStore = () => useRecoilValue(resultState);

/**
 * 시나리오 생성 결과 상태를 설정합니다.
 * @returns {(newState: ElementType[][]) => void} 결과 상태를 업데이트하는 함수.
 */
export const useSetResultStore = () => useSetRecoilState(resultState);
