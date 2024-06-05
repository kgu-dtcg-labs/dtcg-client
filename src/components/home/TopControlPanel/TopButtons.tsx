import { Button } from '@components/common/Button/Button';
import { PiSirenFill } from 'react-icons/pi';
import { FaBook } from 'react-icons/fa6';
import { IoClose, IoReload } from 'react-icons/io5';
import { useCallback } from 'react';
import { useSetSelectedModalStore } from '@store/modal-type';
import { useSetSelectedCaseStore } from '@store/selected-case';

const InputAccidentModalButton = () => {
  const setModal = useSetSelectedModalStore();
  const handleOpenDataModal = useCallback(() => {
    setModal('사고');
  }, [setModal]);

  return (
    <Button
      icon={<PiSirenFill />}
      onClick={handleOpenDataModal}
      color="black"
      className="font-semibold"
    >
      사고 데이터 입력
    </Button>
  );
};

const InputLawModalButton = () => {
  const setModal = useSetSelectedModalStore();
  const handleOpenLawModal = useCallback(() => {
    setModal('법률');
  }, [setModal]);

  return (
    <Button
      icon={<FaBook />}
      onClick={handleOpenLawModal}
      color="black"
      className="font-semibold"
    >
      법률 키워드 검색
    </Button>
  );
};

const ClearAllButton = () => {
  const setSelectedCase = useSetSelectedCaseStore();
  return (
    <Button
      className="flex items-center gap-1 font-semibold"
      icon={<IoClose />}
      onClick={() => setSelectedCase([])}
    >
      전체 해제
    </Button>
  );
};

const ReloadButton = () => (
  <Button
    color="blue"
    className="flex items-center gap-1 font-semibold"
    icon={<IoReload />}
    onClick={() => location.reload()}
  >
    초기화
  </Button>
);

export {
  InputAccidentModalButton,
  InputLawModalButton,
  ClearAllButton,
  ReloadButton,
};
