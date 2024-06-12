import { postSaveScenarios } from '@api/scenario';
import { Button } from '@components/common/Button/Button';
import { BsDatabaseFillAdd } from 'react-icons/bs';

import type { ElementType } from '@type/element';
import { useGetParsedDataStore } from '@store/parsedData';

export interface SaveButtonProps {
  data: ElementType[][];
}

const SaveButton = ({ data }: SaveButtonProps) => {
  const parsedData = useGetParsedDataStore();

  const handleSaveButtonClick = async () => {
    if (data.length === 0) {
      alert('생성된 시나리오가 없습니다.');
    }

    const res = await postSaveScenarios(parsedData);
    console.log(res);
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <Button
        color="black"
        icon={<BsDatabaseFillAdd />}
        className="font-semibold w-[352px]"
        onClick={handleSaveButtonClick}
      >
        데이터베이스에 저장하기
      </Button>
      <p className="font-bold">
        <span className="text-red-600">*</span> DB에 저장하기 전, 반드시
        "정제하기" 버튼을 클릭해주시고, 8~10초간 대기해주세요.
        <span className="text-red-600">*</span>
      </p>
    </div>
  );
};

export default SaveButton;
