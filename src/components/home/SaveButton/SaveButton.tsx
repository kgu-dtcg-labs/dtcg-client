import { postSaveScenarios } from '@api/scenario';
import { Button } from '@components/common/Button/Button';
import { TABLE_HEADER } from '@constants/header';
import { BsDatabaseFillAdd } from 'react-icons/bs';

import type { ElementType } from '@type/element';

interface SaveButtonProps {
  data: ElementType[][];
}

const SaveButton = ({ data }: SaveButtonProps) => {
  const handleSaveButtonClick = async () => {
    if (data.length === 0) return;

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
      icon={<BsDatabaseFillAdd />}
      className="font-semibold"
      onClick={handleSaveButtonClick}
    >
      데이터베이스에 저장하기
    </Button>
  );
};

export default SaveButton;
