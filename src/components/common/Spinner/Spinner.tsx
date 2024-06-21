import { IoLogoElectron } from 'react-icons/io5';

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center gap-2">
        <div className="animate-spin">
          <IoLogoElectron className="size-20" />
        </div>
        <p className="text-2xl">로딩중...</p>
      </div>
    </div>
  );
};

export default Spinner;
