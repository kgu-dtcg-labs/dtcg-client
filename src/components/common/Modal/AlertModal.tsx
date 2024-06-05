import { useSetSelectedModalStore } from '@store/modal-type';
import { Button } from '../Button/Button';
import { Modal } from './Modal';

const AlertModal = () => {
  const setModal = useSetSelectedModalStore();

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-2 text-center">
        <span className="py-3">선택한 케이스가 없습니다.</span>
        <Button color="black" onClick={() => setModal('none')}>
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
