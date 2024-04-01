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
  IoReaderOutline,
} from 'react-icons/io5';
import { Button } from '@components/common/Button/Button';
import LayerHeader from '@components/home/LayerHeader/LayerHeader';
import ResultTable from '@components/home/ResultTable/ResultTable';
import { SelectedCaseContext } from '@components/contexts/SelectedCaseContext';
import { ElementType } from '@type/element';
import { Modal } from '@components/common/Modal/Modal';
import { mocks } from '@mocks/mocks';
import classNames from 'classnames';

const HomePage = () => {
  const { selectedCase, setSelectedCase } = useContext(SelectedCaseContext);
  const allCases = mocks.filter((item) => item.type === 'case');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDataModal, setOpenDataModal] = useState<boolean>(false);
  const [accidentData, setAccidentData] = useState<string>();
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [layer, setLayer] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [result, setResult] = useState<ElementType[][]>([]);

  const handleLayerClick = useCallback((layer: number) => {
    setLayer(Math.min(Math.max(layer, 1), 7));
  }, []);

  const handleCountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(+e.target.value);
    },
    [],
  );

  const handleOpenDataModal = useCallback(() => {
    setAccidentData('');
    setOpenDataModal((prev) => !prev);
  }, [setOpenDataModal]);

  const handleOpenModal = useCallback(() => {
    if (selectedCase.length === 0) {
      return setOpenAlert((prev) => !prev);
    }
    setOpenModal((prev) => !prev);
  }, [selectedCase]);

  const handleChangeData = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAccidentData(e.target.value);
    },
    [],
  );

  // 랜덤생성
  const handleRandomCreate = () => {
    setOpenModal(false);
    setResult(createMultipleScenarios(allCases, count));
  };

  // 선택생성
  const handleSelectCreate = () => {
    if (selectedCase.length === 0) {
      return setOpenAlert((prev) => !prev);
    }
    setResult([createOneScenario(selectedCase)]);
  };

  return (
    <div className="py-10 select-none">
      <div className="flex items-center justify-between mb-10">
        <Button
          icon={<IoReaderOutline />}
          onClick={handleOpenDataModal}
          color="black"
          className="font-semibold"
        >
          사고 데이터 입력하기
        </Button>
        <div className="flex items-center gap-2">
          <Button
            className="flex items-center gap-1 font-semibold"
            icon={<IoClose />}
            onClick={() => setSelectedCase([])}
          >
            전체 해제
          </Button>
          <Button
            color="blue"
            className="flex items-center gap-1 font-semibold"
            icon={<IoReload />}
            onClick={() => location.reload()}
          >
            초기화
          </Button>
        </div>
      </div>
      <LayerHeader layer={layer} onClick={handleLayerClick} />
      <ElementTree.Wrapper>
        {[1, 2, 3, 4, 5, 6, 7].map((layerNumber) => (
          <ElementTree
            key={layerNumber}
            data={treeParser(layerNumber)}
            className={classNames({ hidden: layer !== layerNumber })}
          />
        ))}
      </ElementTree.Wrapper>
      <div className="flex justify-center gap-2 mt-6">
        <Button
          color="black"
          className="h-10 font-semibold w-28"
          icon={<IoShuffle />}
          onClick={handleOpenModal}
        >
          랜덤 생성
        </Button>
        <Button
          color="black"
          className="h-10 font-semibold w-28"
          icon={<IoCheckmarkDone />}
          onClick={handleSelectCreate}
        >
          선택 생성
        </Button>
      </div>
      <ResultTable.Wrapper>
        <ResultTable result={result} />
      </ResultTable.Wrapper>
      <div className="flex justify-center gap-2 mt-6">
        <Button
          color="black"
          icon={<IoArrowDownCircle />}
          className="h-10 font-semibold w-28"
        >
          저장하기
        </Button>
      </div>
      {openModal && (
        <Modal onClose={handleOpenModal}>
          <div className="grid items-center gap-2 text-center">
            <h1 className="pb-4 text-xl font-semibold ">랜덤 생성 개수 입력</h1>
            <span>생성할 시나리오의 개수를 입력해주세요.</span>
            <span>최대 1000개까지 입력 가능</span>
            {/** TODO 제한 수 지정 (대략 3000개)**/}
            <input
              value={count}
              onChange={handleCountChange}
              className="p-2 border rounded outline-none dark:bg-zinc-800"
            />
            <Button color="black" onClick={handleRandomCreate}>
              생성하기
            </Button>
          </div>
        </Modal>
      )}
      {openAlert && (
        <Modal onClose={handleOpenModal}>
          <div className="grid items-center gap-2 text-center">
            <span className="py-3">선택한 케이스가 없습니다.</span>
            <Button color="black" onClick={() => setOpenAlert(false)}>
              확인
            </Button>
          </div>
        </Modal>
      )}
      {openDataModal && (
        <Modal onClose={handleOpenDataModal}>
          <div className="grid items-center gap-2 text-center">
            <span className="py-3 text-xl">
              아래 빈칸에 사고 데이터를 입력해주세요.
            </span>
            <textarea
              placeholder="여기에 입력하세요"
              value={accidentData}
              onChange={handleChangeData}
              className="resize-none w-[800px] min-h-[400px] border p-4 overflow-auto scrollbar-hide outline-none mb-5 rounded-md"
            ></textarea>
            <Button
              color="black"
              onClick={() => setOpenDataModal(false)}
              className="py-3 font-semibold text-lg"
            >
              입력하기
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
