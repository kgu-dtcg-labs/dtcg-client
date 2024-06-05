import AccidentModal from '@components/common/Modal/AccidentModal';
import AlertModal from '@components/common/Modal/AlertModal';
import LawModal from '@components/common/Modal/LawModal';
import RandomModal from '@components/common/Modal/RandomModal';
import SelectedRandomModal from '@components/common/Modal/SelectedRandomModal';
import { Modal as ModalType } from '@type/common';

interface ModalsProps {
  modalType: ModalType;
}

const Modals = ({ modalType }: ModalsProps) => {
  return (
    <>
      {modalType === '랜덤' && <RandomModal />}
      {modalType === '선택' && <SelectedRandomModal />}
      {modalType === '알림' && <AlertModal />}
      {modalType === '사고' && <AccidentModal />}
      {modalType === '법률' && <LawModal />}
    </>
  );
};

Modals.propTypes = {};

export default Modals;
