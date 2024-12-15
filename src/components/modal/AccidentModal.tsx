import { useSetSelectedModalStore } from '@store/modal-type';
import { Button } from '../Button';
import { Modal } from './Modal';
import { useState } from 'react';
import { postAccidentData } from '@api/acryl';
import { useSetSelectedCaseStore } from '@store/selected-case';
import { matchingCaseWithResponse } from '@utils/element';
import { useSetLoadingStateStore } from '@store/loading';
import { toast } from '@utils/toast';

const AccidentModal = () => {
  const setModal = useSetSelectedModalStore();
  const setSelectedCase = useSetSelectedCaseStore();
  const setIsLoading = useSetLoadingStateStore();
  const [accidentData, setAccidentData] = useState('');

  const handleAccidentDataChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setAccidentData(e.target.value);
  };

  const handleAcylSearchClick = async () => {
    setIsLoading(true);
    setModal('none');

    try {
      const response = await postAccidentData(accidentData);
      const data = matchingCaseWithResponse(response);
      setSelectedCase(data);
      setIsLoading(false);
      toast('완료되었습니다!');
    } catch {
      toast('오류가 발생했습니다.');
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-2 text-center">
        <span className="py-3 text-xl dark:text-white">
          아래 빈칸에 사고 데이터를 입력해주세요.
        </span>
        <textarea
          placeholder="여기에 입력하세요"
          value={accidentData}
          onChange={handleAccidentDataChange}
          className="resize-none w-[800px] min-h-[400px] border p-4 overflow-auto scrollbar-hide outline-none mb-5 rounded-md"
        />
        <Button
          color="black"
          onClick={handleAcylSearchClick}
          className="py-3 text-lg font-semibold"
        >
          입력하기
        </Button>
      </div>
    </Modal>
  );
};

export default AccidentModal;
