import { useCallback, useState } from 'react';
import ElementTree from '@components/common/ElementTree/ElementTree';
import {
  createMultipleScenarios,
  matchingCaseWithResponse,
  treeParser,
} from '@utils/element';
import { IoReload, IoClose } from 'react-icons/io5';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { PiSelectionAllFill, PiSirenFill } from 'react-icons/pi';
import { FaBook } from 'react-icons/fa6';
import { Button } from '@components/common/Button/Button';
import LayerHeader from '@components/home/LayerHeader/LayerHeader';
import ResultTable from '@components/home/ResultTable/ResultTable';
import { ElementType, responseDataType } from '@type/element';
import { Modal } from '@components/common/Modal/Modal';
import classNames from 'classnames';
import { useSelectedCaseStore } from '@store/selected-case';
import { useGetCaseStore } from '@store/case';
import { AxiosResponse } from 'axios';
import { mocks } from '@mocks/mocks';
import SaveButton from '@components/home/SaveButton/SaveButton';
import { postAccidentData } from '@api/acryl';
import type { Modal as ModalType, RandomType } from '@type/common';

const HomePage = () => {
  const defaultCase = useGetCaseStore();
  const [selectedCase, setSelectedCase] = useSelectedCaseStore();
  const [openModal, setOpenModal] = useState<ModalType>('none');
  const [lawData, setLawData] = useState<string>('');
  const [accidentData, setAccidentData] = useState<string>('');
  const [layer, setLayer] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [result, setResult] = useState<ElementType[][]>([]);

  const handleLayerClick = useCallback((layer: number) => {
    setLayer(Math.min(Math.max(layer, 1), 7));
  }, []);

  const handleCountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(Number(e.target.value.replace(/\D/g, '')));
    },
    [],
  );

  const handleOpenModalCloseClick = () => {
    setOpenModal('none');
  };

  const handleOpenDataModal = useCallback(() => {
    setAccidentData('');
    setOpenModal('사고');
  }, []);

  const handleOpenLawModal = useCallback(() => {
    setLawData('');
    setOpenModal('법률');
  }, []);

  const handleOpenModal = useCallback(() => {
    if (selectedCase.length === 0) {
      return setOpenModal('알림');
    }
    setOpenModal('랜덤');
  }, [selectedCase]);

  const handleOpenSelectModal = useCallback(() => {
    if (selectedCase.length === 0) {
      return setOpenModal('알림');
    }
    setOpenModal('선택');
  }, [selectedCase]);

  const handleChangeData = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAccidentData(e.target.value);
    },
    [],
  );

  const handleChangeLawData = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLawData(e.target.value);
    },
    [],
  );

  /**
   * 랜덤 생성
   * 모든 케이스 중에서 랜덤으로 선택하여 시나리오를 생성합니다.
   */
  const handleRandomButtonClick = (cases: ElementType[], type: RandomType) => {
    setOpenModal('none');
    setResult(createMultipleScenarios(cases, count, type));
  };

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
      setSelectedCase(processedData);
      setOpenModal('none');
    } catch (e) {
      console.error(e);
    }
  };

  const matchingLawData = useCallback(
    (keyword: string) => {
      setSelectedCase((prevSelectedCase) => {
        setOpenModal('none');
        // parentId가 7인 항목들 중 name 속성이 키워드를 포함하는 항목들을 필터링
        const filteredItems = mocks.filter(
          (item) => item.parentId === 7 && item.value?.includes(keyword),
        );
        // 이미 selectedCase에 존재하는지 확인하고, 없는 항목들만 추가
        const newItems = filteredItems.filter((filteredItem) =>
          prevSelectedCase.some((item) => item.id === filteredItem.id),
        );
        return [...prevSelectedCase, ...newItems];
      });
    },
    [setSelectedCase],
  );

  return (
    <div className="py-10 select-none">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <Button
            icon={<PiSirenFill />}
            onClick={handleOpenDataModal}
            color="black"
            className="font-semibold"
          >
            사고 데이터 입력
          </Button>
          <Button
            icon={<FaBook />}
            onClick={handleOpenLawModal}
            color="black"
            className="font-semibold"
          >
            법률 키워드 검색
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="flex items-center gap-1 font-semibold"
            icon={<IoClose />}
            onClick={() => setSelectedCase([])}
          >
            전체 해제
          </Button>
          <Button
            color="blue"
            className="flex items-center gap-1 font-semibold"
            icon={<IoReload />}
            onClick={() => location.reload()}
          >
            초기화
          </Button>
        </div>
      </div>
      <LayerHeader layer={layer} onClick={handleLayerClick} />
      <ElementTree.Wrapper>
        {[1, 2, 3, 4, 5, 6, 7].map((layerNumber) => (
          <ElementTree
            key={layerNumber}
            data={treeParser(layerNumber)}
            className={classNames({ hidden: layer !== layerNumber })}
          />
        ))}
      </ElementTree.Wrapper>
      <div className="flex justify-center gap-2 mt-6">
        <Button
          color="black"
          className="h-10 font-semibold w-28"
          icon={<GiPerspectiveDiceSixFacesRandom />}
          onClick={handleOpenModal}
        >
          랜덤 생성
        </Button>
        <Button
          color="black"
          className="h-10 font-semibold w-28"
          icon={<PiSelectionAllFill />}
          onClick={handleOpenSelectModal}
        >
          선택 생성
        </Button>
        <SaveButton data={result} />
      </div>
      <ResultTable result={result} />
      {openModal === '랜덤' && (
        <Modal onClose={handleOpenModalCloseClick}>
          <div className="grid items-center gap-2 text-center">
            <h1 className="pb-4 text-xl font-semibold ">랜덤 생성 개수 입력</h1>
            <span>생성할 시나리오의 개수를 입력해주세요.</span>
            <span>최대 50,000개까지 입력 가능</span>
            <input
              value={count}
              onChange={handleCountChange}
              className="p-2 border rounded outline-none dark:bg-zinc-800"
            />
            <Button
              color="black"
              onClick={() => handleRandomButtonClick(defaultCase, '랜덤')}
            >
              생성하기
            </Button>
          </div>
        </Modal>
      )}
      {openModal === '선택' && (
        <Modal onClose={handleOpenModalCloseClick}>
          <div className="grid items-center gap-2 text-center">
            <h1 className="pb-4 text-xl font-semibold ">선택 생성 개수 입력</h1>
            <span>생성할 시나리오의 개수를 입력해주세요.</span>
            <span>최대 50,000개까지 입력 가능</span>
            <input
              value={count}
              onChange={handleCountChange}
              className="p-2 border rounded outline-none dark:bg-zinc-800"
            />
            <Button
              color="black"
              onClick={() => handleRandomButtonClick(selectedCase, '선택')}
            >
              생성하기
            </Button>
          </div>
        </Modal>
      )}
      {openModal === '알림' && (
        <Modal onClose={handleOpenModalCloseClick}>
          <div className="grid items-center gap-2 text-center">
            <span className="py-3">선택한 케이스가 없습니다.</span>
            <Button color="black" onClick={() => setOpenModal('none')}>
              확인
            </Button>
          </div>
        </Modal>
      )}
      {openModal === '사고' && (
        <Modal onClose={handleOpenModalCloseClick}>
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
      )}
      {openModal === '법률' && (
        <Modal onClose={handleOpenModalCloseClick}>
          <div className="grid items-center gap-2 text-center">
            <span className="py-3 text-xl">
              아래 빈칸에 법률 키워드를 입력해주세요.
            </span>
            <textarea
              placeholder="여기에 입력하세요"
              value={lawData}
              onChange={handleChangeLawData}
              className="resize-none w-[800px] min-h-[200px] border p-4 overflow-auto scrollbar-hide outline-none mb-5 rounded-md"
            ></textarea>
            <Button
              color="black"
              onClick={() => matchingLawData(lawData)}
              className="py-3 text-lg font-semibold"
            >
              입력하기
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
