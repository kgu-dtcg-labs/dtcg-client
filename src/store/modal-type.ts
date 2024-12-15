import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import type { Modal as ModalType } from '@type/modal';

/**
 * 선택된 모달의 상태를 관리하는 atom입니다.
 */
const selectedModalState = atom<ModalType>({
  key: 'selected-modal',
  default: 'none',
});

/**
 * 선택된 모달의 상태를 가져오고 설정합니다.
 */
export const useSelectedModalStore = () => useRecoilState(selectedModalState);

/**
 * 선택된 모달의 현재 상태를 가져옵니다.
 */
export const useGetSelectedModalStore = () =>
  useRecoilValue(selectedModalState);

/**
 * 선택된 모달의 상태를 설정합니다.
 */
export const useSetSelectedModalStore = () =>
  useSetRecoilState(selectedModalState);
