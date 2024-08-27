import { postSaveScenarios } from '@api/scenario';
import { Button } from '@components/common/Button/Button';
import { BsDatabaseFillAdd } from 'react-icons/bs';

import { useGetParsedDataStore } from '@store/parsedData';
import { useGetResultStore } from '@store/result';
import { message } from '@utils/toast';

const SaveButton = () => {
  const parsedData = useGetParsedDataStore();
  const testCases = useGetResultStore().cases;
  const isEmpty = testCases.length === 0;

  const handleSaveButtonClick = async () => {
    if (isEmpty) {
      message('생성된 시나리오가 없습니다.');
    }

    try {
      await postSaveScenarios(parsedData);
      message('완료되었습니다!');
    } catch (e) {
      message('오류가 발생했습니다.');
    }
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
