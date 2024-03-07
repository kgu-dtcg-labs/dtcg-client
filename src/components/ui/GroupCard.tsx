import { useState } from "react";

interface Props {
  name: string;
}

const GroupCard = ({ name }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="flex items-center">
      <div className="h-[1px] w-7 bg-black"></div>
      <div className="flex w-32 h-10 px-2 rounded-lg bg-gray-200 justify-between text-center items-center text-sm font-semibold">
        <div></div>
        <p>{name}</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="grid place-items-center w-5 h-5 rounded-full bg-gray-400"
        >
          <p className="font-bold text-sm text-white">{isOpen ? "-" : "+"}</p>
        </button>
      </div>
      {isOpen ? <div className="h-[1px] w-7 bg-black"></div> : <></>}
    </div>
  );
};

export default GroupCard;
