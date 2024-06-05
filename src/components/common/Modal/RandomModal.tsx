import { useCallback, useState } from 'react';
import { Modal } from './Modal';
import { useSetSelectedModalStore } from '@store/modal-type';
import { Button } from '../Button/Button';
import { useSetResultStore } from '@store/result';
import { createMultipleScenarios } from '@utils/element';
import { ElementType } from '@type/element';
import { RandomType } from '@type/common';
import { useGetCaseStore } from '@store/case';

const RandomModal = () => {
  const [count, setCount] = useState<number>(1);
  const setModal = useSetSelectedModalStore();
  const setResult = useSetResultStore();
  const defaultCase = useGetCaseStore();

  const handleCountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(Number(e.target.value.replace(/\D/g, '')));
    },
    [],
  );

  /**
   * 랜덤 생성
   * 모든 케이스 중에서 랜덤으로 선택하여 시나리오를 생성합니다.
   */
  const handleRandomButtonClick = (cases: ElementType[], type: RandomType) => {
    setModal('none');
    setResult(createMultipleScenarios(cases, count, type));
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-2 text-center">
        <h1 className="pb-4 text-xl font-semibold ">랜덤 생성 개수 입력</h1>
        <span>생성할 시나리오의 개수를 입력해주세요.</span>
        <span>최대 50,000개까지 입력 가능</span>
        <input
          value={count}
          onChange={handleCountChange}
          className="p-2 border rounded outline-none dark:bg-zinc-800"
        />
        <Button
          color="black"
          onClick={() => handleRandomButtonClick(defaultCase, '랜덤')}
        >
          생성하기
        </Button>
      </div>
    </Modal>
  );
};

export default RandomModal;
