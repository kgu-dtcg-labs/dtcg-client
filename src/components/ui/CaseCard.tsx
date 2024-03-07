import { useState } from "react";

interface Props {
  name: string;
}

const CaseCard = ({ name }: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <div className="flex items-center">
      <div className="h-[1px] w-7 bg-black"></div>
      <button
        onClick={() => setIsSelected(!isSelected)}
        className={`${isSelected ? "border-orange-300 text-orange-300" : ""} grid w-32 h-10 rounded-lg border-2 text-center text-sm items-center font-bold`}
      >
        {name}
      </button>
    </div>
  );
};

export default CaseCard;
