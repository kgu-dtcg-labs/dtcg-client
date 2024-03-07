interface Props {
  name: string;
}

const LayerCard = ({ name }: Props) => {
  return (
    <div className="flex items-center">
      <div className="grid w-32 h-10 rounded-lg bg-sky-100 text-center text-sm items-center font-semibold">
        {name}
      </div>
      <div className="h-[1px] w-7 bg-black"></div>
    </div>
  );
};

export default LayerCard;
