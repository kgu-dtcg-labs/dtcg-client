import AccidentModal from '@components/Modal/AccidentModal';
import ApplyPresetModal from '@components/Modal/ApplyPresetModal';
import LawModal from '@components/Modal/LawModal';
import RandomModal from '@components/Modal/RandomModal';
import SelectedRandomModal from '@components/Modal/SelectedRandomModal';
import { Modal as ModalType } from '@type/common';

interface ModalsProps {
  modalType: ModalType;
}

const Modals = ({ modalType }: ModalsProps) => {
  return (
    <>
      {modalType === '랜덤' && <RandomModal />}
      {modalType === '선택' && <SelectedRandomModal />}
      {modalType === '사고' && <AccidentModal />}
      {modalType === '법률' && <LawModal />}
      {modalType === '프리셋' && <ApplyPresetModal />}
    </>
  );
};

export default Modals;
