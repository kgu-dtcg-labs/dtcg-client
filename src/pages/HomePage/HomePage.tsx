import { useState } from 'react';
import { useGetSelectedModalStore } from '@store/modal-type';
import Modals from '@pages/HomePage/components/Modals';
import TopControlPanel from '@pages/HomePage/components/TopControlPanel';
import { treeParser } from '@utils/element';
import Layer from '@pages/HomePage/components/Layer';
import Spinner from '@components/Spinner';
import { useGetLoadingStateStore } from '@store/loading';
import clsx from 'clsx';
import { LAYER_LIST } from '@/data/element';

const LAYER_RANGE = LAYER_LIST.map((layer) => layer.id);

export default function HomePage() {
  const modalType = useGetSelectedModalStore();
  const isLoading = useGetLoadingStateStore();
  const [layer, setLayer] = useState(1);

  const handleLayerClick = (layer: number) => {
    setLayer(Math.min(Math.max(layer, 1), 7));
  };

  return (
    <div className="py-10 select-none">
      {isLoading && <Spinner />}
      <Modals modalType={modalType} />
      <TopControlPanel />
      <Layer>
        <Layer.Header layer={layer} onClick={handleLayerClick} />
        <Layer.TreeWrapper>
          {LAYER_RANGE.map((layerId) => (
            <Layer.Tree
              key={layerId}
              data={treeParser(layerId)}
              className={clsx({ hidden: layer !== layerId })}
            />
          ))}
        </Layer.TreeWrapper>
        <Layer.HandleScenarioButtons />
        <Layer.Result />
      </Layer>
    </div>
  );
}
