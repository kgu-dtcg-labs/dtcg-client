import { useCallback, useState } from 'react';
import ElementTree from '@components/common/ElementTree/ElementTree';
import { treeParser } from '@utils/element';
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

const HomePage = () => {
  const [layer, setLayer] = useState<number>(1);

  const handleLayerClick = useCallback((layer: number) => {
    setLayer(layer);
  }, []);

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
      <div className="p-10 mt-6 overflow-auto border rounded bg-gray-50 scrollbar-hide">
        <ElementTree data={treeParser(layer)} />
      </div>

      <div className="mt-6 flex gap-2 justify-center">
        <Button
          color="black"
          className="flex items-center justify-center gap-1 font-semibold w-28 h-10"
        >
          <IoShuffle />
          <span>랜덤 생성</span>
        </Button>
        <Button
          color="black"
          className="flex items-center gap-1 font-semibold justify-center w-28 h-10"
        >
          <IoCheckmarkDone />
          <span>선택 생성</span>
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <ResultTable />
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          color="black"
          className="flex items-center gap-1 font-semibold justify-center w-28 h-10"
        >
          <IoArrowDownCircle />
          <span>저장하기</span>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
