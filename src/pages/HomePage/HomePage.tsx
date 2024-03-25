import { useCallback, useContext, useState } from 'react';
import ElementTree from '@components/common/ElementTree/ElementTree';
import {
  createMultipleScenarios,
  createOneScenario,
  treeParser,
} from '@utils/element';
import {
  IoReload,
  IoClose,
  IoShuffle,
  IoCheckmarkDone,
  IoArrowDownCircle,
} from 'react-icons/io5';
import { Button } from '@components/common/Button/Button';
import LayerHeader from '@components/home/LayerHeader/LayerHeader';
import ResultTable from '@components/home/ResultTable/ResultTable';
import { SelectedCaseContext } from '@components/contexts/SelectedCaseContext';
import { ElementType } from '@type/element';
import { Modal } from '@components/common/Modal/Modal';

const HomePage = () => {
  const { selectedCase, allCases } = useContext(SelectedCaseContext);
  const [layer, setLayer] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [count, setCount] = useState<string>('0');
  const [result, setResult] = useState<ElementType[][]>([]);

  const handleLayerClick = useCallback((layer: number) => {
    setLayer(layer);
  }, []);

  const onClickResetButton = () => {
    location.reload();
  };

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value);
  };

  const handleRandomCreate = () => {
    setResult(createMultipleScenarios(allCases, Number(count)));
    handleOpenModal();
  };

  const handleSelectCreate = () => {
    setResult([createOneScenario(selectedCase)]);
  };

  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-10">
        <Button className="flex items-center gap-1 font-semibold">
          <IoClose />
          <span>전체 해제</span>
        </Button>
        <Button
          color="blue"
          onClick={onClickResetButton}
          className="flex items-center gap-1 font-semibold"
        >
          <IoReload />
          <span>초기화</span>
        </Button>
      </div>

      <LayerHeader layer={layer} onClick={handleLayerClick} />

      <div className="p-10 mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600 scrollbar-hide">
        {[1, 2, 3, 4, 5, 6, 7].map((layerNumber) => (
          <ElementTree
            key={layerNumber}
            data={treeParser(layerNumber)}
            className={`${layer === layerNumber ? '' : 'hidden'}`}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <Button
          color="black"
          className="flex items-center justify-center h-10 gap-1 font-semibold w-28"
          onClick={handleOpenModal}
        >
          <IoShuffle />
          <span>랜덤 생성</span>
        </Button>
        <Button
          color="black"
          className="flex items-center justify-center h-10 gap-1 font-semibold w-28"
          onClick={handleSelectCreate}
        >
          <IoCheckmarkDone />
          <span>선택 생성</span>
        </Button>
      </div>

      <div className="mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600">
        <ResultTable result={result} />
      </div>

      <div className="flex justify-center mt-6">
        <Button
          color="black"
          className="flex items-center justify-center h-10 gap-1 font-semibold w-28"
        >
          <IoArrowDownCircle />
          <span>저장하기</span>
        </Button>
      </div>

      {openModal && (
        <Modal onClose={handleOpenModal}>
          <div className="grid gap-2 items-center text-center">
            <h1 className="font-semibold text-xl pb-4">랜덤 생성 개수 입력</h1>
            <span>생성할 시나리오의 개수를 입력해주세요.</span>
            <span>최대 0개까지 입력 가능</span>{' '}
            {/**추후에 제한 수 입력 필요 (대략 3000개)**/}
            <input
              type="text"
              value={count}
              onChange={handleCountChange}
              className="border p-2 outline-none"
            />
            <Button color="black" onClick={handleRandomCreate}>
              생성하기
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
