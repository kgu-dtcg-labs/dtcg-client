import { useCallback, useState } from 'react';
import ElementTree from '@components/common/ElementTree/ElementTree';
import { treeParser } from '@utils/element';
import { IoReload } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { Button } from '@components/common/Button/Button';
import LayerHeader from '@components/home/LayerHeader/LayerHeader';

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
    </div>
  );
};

export default HomePage;