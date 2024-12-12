import { useSetSelectedModalStore } from '@store/modal-type';
import { Modal } from './Modal';
import { PRESETS } from '@/data/preset';
import { Button } from '../Button';
import { useState } from 'react';
import { useSetSelectedCaseStore } from '@store/selected-case';
import { useGetCaseStore } from '@store/case';
import clsx from 'clsx/lite';

const ApplyPresetModal = () => {
  const setModal = useSetSelectedModalStore();
  const defaultCase = useGetCaseStore();
  const setSelectedCase = useSetSelectedCaseStore();
  const [selectedPreset, setSelectedPreset] = useState(0);

  const handleSelectPresetClick = (id: number) => {
    setSelectedPreset(id);
  };

  const handleApplyCaseClick = (id: number) => {
    const selectedPreset = PRESETS.find((preset) => preset.id === id);

    if (selectedPreset) {
      const removalIds = new Set(
        selectedPreset.removalElements.map((el) => el.id),
      );
      const filteredCase = defaultCase.filter(
        (caseItem) => !removalIds.has(caseItem.id),
      );

      setSelectedCase(filteredCase);
    }

    setModal('none');
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-xl">적용할 프리셋을 선택해주세요</p>
        <div className="grid grid-cols-4 rounded-lg">
          {PRESETS.map((preset) => (
            <button
              key={`preset-${preset.id}`}
              type="button"
              onClick={() => handleSelectPresetClick(preset.id)}
              className={clsx(
                'px-4 py-3 border',
                selectedPreset === preset.id &&
                  'border-orange-400 bg-orange-400 text-white font-semibold',
              )}
            >
              {preset.name}
            </button>
          ))}
        </div>
        <Button
          onClick={() => handleApplyCaseClick(selectedPreset)}
          color="black"
          className="w-full text-lg font-semibold"
        >
          적용하기
        </Button>
      </div>
    </Modal>
  );
};

export default ApplyPresetModal;
