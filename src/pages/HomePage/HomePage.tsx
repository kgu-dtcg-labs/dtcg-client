import { useCallback, useContext, useState } from 'react';
import ElementTree from '@components/common/ElementTree/ElementTree';
import { createOneScenario, treeParser } from '@utils/element';
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

const HomePage = () => {
  const { selectedCase } = useContext(SelectedCaseContext);
  const [layer, setLayer] = useState<number>(1);
  const [result, setResult] = useState<ElementType[]>([]);

  const handleLayerClick = useCallback((layer: number) => {
    setLayer(layer);
  }, []);

  const handleRandomCreate = () => {
    setResult(createOneScenario(selectedCase));
  };

  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-10">
        <Button className="flex items-center gap-1 font-semibold">
          <IoClose />
          <span>전체 해제</span>
        </Button>
        <Button color="blue" className="flex items-center gap-1 font-semibold">
          <IoReload />
          <span>초기화</span>
        </Button>
      </div>
      <LayerHeader layer={layer} onClick={handleLayerClick} />
      <div className="p-10 mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600 scrollbar-hide">
        <ElementTree data={treeParser(layer)} />
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <Button
          color="black"
          className="flex items-center justify-center h-10 gap-1 font-semibold w-28"
        >
          <IoShuffle />
          <span>랜덤 생성</span>
        </Button>
        <Button
          color="black"
          className="flex items-center justify-center h-10 gap-1 font-semibold w-28"
          onClick={handleRandomCreate}
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
    </div>
  );
};

export default HomePage;
