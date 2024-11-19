import { postSaveScenarios } from '@api/scenario';
import { Button } from '@components/Button/Button';
import { BsDatabaseFillAdd } from 'react-icons/bs';
import { useGetParsedDataStore } from '@store/parsedData';
import { useGetResultStore } from '@store/result';
import { toast } from '@utils/toast';
import { useMutation } from '@tanstack/react-query';
import Spinner from '@components/Spinner/Spinner';

const SaveButton = () => {
  const parsedData = useGetParsedDataStore();
  const testCases = useGetResultStore().cases;
  const isEmpty = testCases.length === 0;

  const mutation = useMutation({
    mutationFn: postSaveScenarios,
    onSuccess: () => {
      toast('저장이 완료되었습니다!');
    },
    onError: () => {
      toast('오류가 발생했습니다.');
    },
  });

  const handleSaveButtonClick = () => {
    if (isEmpty) {
      toast('생성된 시나리오가 없습니다.');
      return;
    }

    mutation.mutate(parsedData);
  };

  return (
    <div className="flex flex-col items-center gap-1">
      {mutation.isPending && <Spinner />}
      <Button
        color={`${isEmpty ? 'disabled' : 'black'}`}
        icon={<BsDatabaseFillAdd />}
        className="font-semibold w-[352px]"
        onClick={handleSaveButtonClick}
        disabled={isEmpty || mutation.isPending}
      >
        데이터베이스에 저장하기
      </Button>
    </div>
  );
};

export default SaveButton;
