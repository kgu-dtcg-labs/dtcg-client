import { deleteScenarios } from '@api/scenario';
import { Button } from '@components/common/Button/Button';
import { message } from '@utils/toast';
import { IoTrashOutline } from 'react-icons/io5';

const DeleteButton = () => {
  const clickDeleteButton = async () => {
    try {
      await deleteScenarios();
      message('삭제가 완료되었습니다.');
    } catch (e) {
      message('삭제에 실패했습니다.');
    }
  };

  return (
    <Button
      icon={<IoTrashOutline />}
      color="red"
      className="w-[352px]"
      onClick={clickDeleteButton}
    >
      삭제하기
    </Button>
  );
};

export default DeleteButton;
