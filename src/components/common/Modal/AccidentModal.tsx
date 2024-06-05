import { useSetSelectedModalStore } from '@store/modal-type';
import { Button } from '../Button/Button';
import { Modal } from './Modal';
import { useCallback, useState } from 'react';
import { postAccidentData } from '@api/acryl';
import { useSetSelectedCaseStore } from '@store/selected-case';
import { matchingCaseWithResponse } from '@utils/element';
import { AxiosResponse } from 'axios';
import { responseDataType } from '@type/element';

const AccidentModal = () => {
  const setModal = useSetSelectedModalStore();
  const setSelectedCase = useSetSelectedCaseStore();
  const [accidentData, setAccidentData] = useState<string>('');

  const handleChangeData = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAccidentData(e.target.value);
    },
    [],
  );

  /**
   * 아크릴 api 통신
   * 아크릴 api의 response값을 케이스에 적용시킵니다.
   */
  const postAndMatchingData = async () => {
    setSelectedCase([]); // 선택된 케이스를 초기화합니다.

    try {
      // postData 함수의 결과가 Promise이므로 await을 사용하여 결과를 기다립니다.
      const responseData = await postAccidentData(accidentData);
      const processedData = matchingCaseWithResponse(
        responseData as AxiosResponse<responseDataType>,
      );
      setModal('none');
      setSelectedCase(processedData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-2 text-center">
        <span className="py-3 text-xl">
          아래 빈칸에 사고 데이터를 입력해주세요.
        </span>
        <textarea
          placeholder="여기에 입력하세요"
          value={accidentData}
          onChange={handleChangeData}
          className="resize-none w-[800px] min-h-[400px] border p-4 overflow-auto scrollbar-hide outline-none mb-5 rounded-md"
        ></textarea>
        <Button
          color="black"
          onClick={postAndMatchingData}
          className="py-3 text-lg font-semibold"
        >
          입력하기
        </Button>
      </div>
    </Modal>
  );
};

export default AccidentModal;
