import { LuLoader } from 'react-icons/lu';

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
      <LuLoader size={60} className="animate-spin text-white" />
    </div>
  );
};

export default Spinner;
