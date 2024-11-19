import { deleteScenarios } from '@api/scenario';
import { Button } from '@components/Button/Button';
import { toast } from '@utils/toast';
import { IoTrashOutline } from 'react-icons/io5';
import { useMutation } from '@tanstack/react-query';
import Spinner from '@components/Spinner/Spinner';

const DeleteButton = () => {
  const mutation = useMutation({
    mutationFn: deleteScenarios,
    onSuccess: () => {
      toast('삭제가 완료되었습니다!');
    },
    onError: () => {
      toast('오류가 발생했습니다.');
    },
  });

  const handleDeleteClick = () => {
    mutation.mutate();
  };

  return (
    <>
      {mutation.isPending && <Spinner />}
      <Button
        icon={<IoTrashOutline />}
        color="red"
        className="w-[352px]"
        onClick={handleDeleteClick}
      >
        삭제하기
      </Button>
    </>
  );
};

export default DeleteButton;
