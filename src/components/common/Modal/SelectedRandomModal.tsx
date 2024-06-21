import { useCallback, useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { createTestCases, parseTestCasesByLayer } from '@utils/element';
import { useGetSelectedCaseStore } from '@store/selected-case';
import { useSetSelectedModalStore } from '@store/modal-type';
import { useResultStore } from '@store/result';
import { ElementType } from '@type/element';
import Input from '../Input/Input';
import { useSetParsedDataStore } from '@store/parsedData';
import { useSetLoadingStateStore } from '@store/loading';

const SelectedRandomModal = () => {
  const [count, setCount] = useState<number>(1);
  const [description, setDescription] = useState<string>('');
  const empty = count === 0 || description === '';
  const setModal = useSetSelectedModalStore();
  const selectedCase = useGetSelectedCaseStore();
  const [result, setResult] = useResultStore();
  const setParsedData = useSetParsedDataStore();
  const setIsLoading = useSetLoadingStateStore();

  const handleCountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(Number(e.target.value.replace(/\D/g, '')));
    },
    [],
  );

  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    [],
  );

  /**
   * @description 선택된 케이스들에 한해 시나리오를 랜덤 생성합니다.
   * @param cases 선택된 케이스들
   * @param type 선택 생성 타입
   */
  const handleRandomButtonClick = async (cases: ElementType[]) => {
    setIsLoading(true);
    setModal('none');
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 50),
    );
    const testCases = await createTestCases(cases, count, '선택', description);
    setResult(testCases);
    setParsedData(parseTestCasesByLayer(result));
    setIsLoading(false);
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="pb-4 text-xl font-semibold ">랜덤 생성 개수 입력</h1>
          <span>생성할 시나리오의 개수와 설명을 입력해주세요.</span>
          <span>최대 50,000개까지 입력 가능</span>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            label="테스트 케이스 개수"
            value={count}
            onChange={handleCountChange}
            placeholder="생성할 테스트 케이스의 개수를 입력하세요"
          />
          <Input
            label="설명"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="테스트 케이스에 대한 설명을 작성해주세요"
          />
        </div>

        <Button
          color={`${empty ? 'disabled' : 'black'}`}
          onClick={() => handleRandomButtonClick(selectedCase)}
          disabled={empty}
        >
          생성하기
        </Button>
      </div>
    </Modal>
  );
};

export default SelectedRandomModal;
