import AccidentModal from '@components/modal/AccidentModal';
import ApplyPresetModal from '@components/modal/ApplyPresetModal';
import LawModal from '@components/modal/LawModal';
import RandomModal from '@components/modal/RandomModal';
import SelectedRandomModal from '@components/modal/SelectedRandomModal';
import type { Modal as ModalType } from '@type/modal';

interface Props {
  modalType: ModalType;
}

const Modals = ({ modalType }: Props) => {
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
