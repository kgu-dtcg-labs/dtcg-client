import {
  ClearAllButton,
  InputAccidentModalButton,
  InputLawModalButton,
  ReloadButton,
} from './TopButtons';

const TopControlPanel = () => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-2">
        <InputAccidentModalButton />
        <InputLawModalButton />
      </div>

      <div className="flex items-center gap-2">
        <ClearAllButton />
        <ReloadButton />
      </div>
    </div>
  );
};

export default TopControlPanel;
