import { postSaveScenarios } from '@api/scenario';
import { Button } from '@components/common/Button/Button';
import { TABLE_HEADER } from '@constants/header';
import type { ElementType } from '@type/element';

import { IoArrowDownCircle } from 'react-icons/io5';

interface SaveButtonProps {
  data: ElementType[][];
}

const SaveButton = ({ data }: SaveButtonProps) => {
  const handleSaveButtonClick = async () => {
    const newData = data
      .map((row) =>
        row
          .map(
            (element, index) => `${TABLE_HEADER[index].name}=${element.name}`,
          )
          .join('/'),
      )
      .join(';');

    const res = await postSaveScenarios(newData);
    console.log(res);
  };

  return (
    <Button
      color="black"
      icon={<IoArrowDownCircle />}
      className="h-10 font-semibold w-28"
      onClick={handleSaveButtonClick}
    >
      저장하기
    </Button>
  );
};

export default SaveButton;
