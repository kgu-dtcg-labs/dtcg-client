import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import LayerHeader, { LayerHeaderProps } from '../LayerHeader/LayerHeader';
import {
  ElementProps,
  ElementTree,
  ElementTreeWrapper,
} from '@components/common/ElementTree/ElementTree';
import ResultTable, { ResultProps } from '../ResultTable/ResultTable';
import SaveButton, { SaveButtonProps } from '../SaveButton/SaveButton';
import CreateRandomButton from '../HandleScenarioButtons/CreateRandomButton';
import CreateSelectRandomButton from '../HandleScenarioButtons/CreateSelectRandomButton';

interface LayerProps {
  className?: string;
}

const Layer = ({ children, className }: PropsWithChildren<LayerProps>) => (
  <div
    className={classNames(
      'px-3.5 py-10 mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600',
      className,
    )}
  >
    {children}
  </div>
);

/**
 * 현재 Layer를 설정하는 리스트입니다.
 */
Layer.Header = ({ layer, onClick }: LayerHeaderProps) => (
  <LayerHeader layer={layer} onClick={onClick} />
);

/**
 * Layer 별 트리구조입니다.
 */
Layer.Tree = ({ isFirst, isLast, className, data }: ElementProps) => (
  <ElementTree
    isFirst={isFirst}
    isLast={isLast}
    className={className}
    data={data}
  />
);

Layer.TreeWrapper = ({ children }: PropsWithChildren) => (
  <ElementTreeWrapper>{children}</ElementTreeWrapper>
);

/**
 * 트리 하단의 랜덤생성, 선택 생성, DB에 저장하기 버튼입니다.
 */
Layer.HandleScenarioButtons = ({ data }: SaveButtonProps) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      <CreateRandomButton />
      <CreateSelectRandomButton />
      <SaveButton data={data} />
    </div>
  );
};

/**
 * 시나리오 생성 결과 테이블입니다.
 */
Layer.Result = ({ result }: ResultProps) => <ResultTable result={result} />;

export default Layer;
