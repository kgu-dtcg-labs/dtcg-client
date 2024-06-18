import { postSaveScenarios } from '@api/scenario';
import { Button } from '@components/common/Button/Button';
import { BsDatabaseFillAdd } from 'react-icons/bs';

import { useGetParsedDataStore } from '@store/parsedData';
import { useGetResultStore } from '@store/result';

const SaveButton = () => {
  const parsedData = useGetParsedDataStore();
  const testCases = useGetResultStore().cases;
  const isEmpty = testCases.length === 0;

  const handleSaveButtonClick = async () => {
    if (isEmpty) {
      alert('생성된 시나리오가 없습니다.');
    }

    const res = await postSaveScenarios(parsedData);
    console.log(res);
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <Button
        color={`${isEmpty ? 'disabled' : 'black'}`}
        icon={<BsDatabaseFillAdd />}
        className="font-semibold w-[352px]"
        onClick={handleSaveButtonClick}
        disabled={testCases.length === 0}
      >
        데이터베이스에 저장하기
      </Button>
    </div>
  );
};

export default SaveButton;
