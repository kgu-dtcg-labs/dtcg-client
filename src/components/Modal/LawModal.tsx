import { useCallback, useState } from 'react';
import { Button } from '../Button';
import { Modal } from './Modal';
import { useSetSelectedModalStore } from '@store/modal-type';
import { ELEMENT_DATA } from '@/data/element';
import { useSetSelectedCaseStore } from '@store/selected-case';
import { toast } from '@utils/toast';

const LawModal = () => {
  const setModal = useSetSelectedModalStore();
  const [lawData, setLawData] = useState<string>('');
  const setSelectedCase = useSetSelectedCaseStore();

  const handleChangeLawData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLawData(e.target.value);
  };

  /**
   *  법률 중 입력받은 데이터와 일치하는 케이스들을 리턴합니다.
   */
  const matchingLawData = useCallback(() => {
    setSelectedCase((prevSelectedCase) => {
      // parentId가 7인 항목들 중 content 속성이 키워드를 포함하는 항목들을 필터링
      const filteredItems = ELEMENT_DATA.filter(
        (item) =>
          item.type === 'case' &&
          item.parentId === 7 &&
          item.content?.includes(lawData),
      );

      // 이미 selectedCase에 존재하는지 확인하고, 없는 항목들만 추가
      const newItems = filteredItems.filter(
        (filteredItem) =>
          !prevSelectedCase.some((item) => item.id === filteredItem.id),
      );

      return [...prevSelectedCase, ...newItems];
    });
    setModal('none');
    toast('검색이 완료되었습니다!');
  }, [setSelectedCase, setModal, lawData]);

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-2 text-center">
        <span className="py-3 text-xl">
          아래 빈칸에 법률 키워드를 입력해주세요.
        </span>
        <textarea
          placeholder="여기에 입력하세요"
          value={lawData}
          onChange={handleChangeLawData}
          className="resize-none w-[800px] min-h-[200px] border p-4 overflow-auto scrollbar-hide outline-none mb-5 rounded-md"
        />
        <Button
          color="black"
          onClick={matchingLawData}
          className="py-3 text-lg font-semibold"
        >
          입력하기
        </Button>
      </div>
    </Modal>
  );
};

export default LawModal;
