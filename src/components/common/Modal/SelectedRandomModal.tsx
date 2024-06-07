import { useCallback, useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { createScenarios } from '@utils/element';
import { RandomType } from '@type/common';
import { useGetSelectedCaseStore } from '@store/selected-case';
import { useSetSelectedModalStore } from '@store/modal-type';
import { useSetResultStore } from '@store/result';
import { ElementType } from '@type/element';

const SelectedRandomModal = () => {
  const [count, setCount] = useState<number>(1);
  const setModal = useSetSelectedModalStore();
  const selectedCase = useGetSelectedCaseStore();
  const setResult = useSetResultStore();

  const handleCountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(Number(e.target.value.replace(/\D/g, '')));
    },
    [],
  );

  const handleRandomButtonClick = (cases: ElementType[], type: RandomType) => {
    setModal('none');
    setResult(createScenarios(cases, count, type));
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-2 text-center">
        <h1 className="pb-4 text-xl font-semibold ">선택 생성 개수 입력</h1>
        <span>생성할 시나리오의 개수를 입력해주세요.</span>
        <span>최대 50,000개까지 입력 가능</span>
        <input
          value={count}
          onChange={handleCountChange}
          className="p-2 border rounded outline-none dark:bg-zinc-800"
        />
        <Button
          color="black"
          onClick={() => handleRandomButtonClick(selectedCase, '선택')}
        >
          생성하기
        </Button>
      </div>
    </Modal>
  );
};

export default SelectedRandomModal;
