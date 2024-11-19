import { useState } from 'react';
import { useGetSelectedModalStore } from '@store/modal-type';
import Modals from '@pages/HomePage/components/Modals';
import TopControlPanel from '@pages/HomePage/components/TopControlPanel';
import { treeParser } from '@utils/element';
import Layer from '@pages/HomePage/components/Layer';
import Spinner from '@components/Spinner';
import { useGetLoadingStateStore } from '@store/loading';
import { Toaster } from 'react-hot-toast';
import { LAYER_LIST } from '@constants/layer';
import clsx from 'clsx';

const LAYER_RANGE = LAYER_LIST.map((layer) => layer.layer);

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
      <Toaster />

      {/* 사고, 법률, 랜덤, 선택랜덤, 알림 등의 모달 */}
      <Modals modalType={modalType} />

      {/* 사고 데이터 입력, 법률 키워드 검색 / 전체 해제, 초기화 버튼들 */}
      <TopControlPanel />

      <Layer>
        <Layer.Header layer={layer} onClick={handleLayerClick} />
        <Layer.TreeWrapper>
          {LAYER_RANGE.map((layerNumber) => (
            <Layer.Tree
              key={layerNumber}
              data={treeParser(layerNumber)}
              className={clsx({ hidden: layer !== layerNumber })}
            />
          ))}
        </Layer.TreeWrapper>
        <Layer.HandleScenarioButtons />
        <Layer.Result />
      </Layer>
    </div>
  );
}
