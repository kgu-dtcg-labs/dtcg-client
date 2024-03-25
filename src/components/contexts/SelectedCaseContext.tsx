import {
  PropsWithChildren,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { ElementType } from '@type/element';

interface SelectedCaseContextProps extends PropsWithChildren {}

interface SelectedCaseContextValue {
  allCases: ElementType[];
  setAllCases: Dispatch<SetStateAction<ElementType[]>>;
  selectedCase: ElementType[];
  setSelectedCase: Dispatch<SetStateAction<ElementType[]>>;
  isClear: boolean;
  setIsClear: Dispatch<SetStateAction<boolean>>;
}

export const SelectedCaseContext = createContext<SelectedCaseContextValue>({
  isClear: false,
  setIsClear: () => {},
  allCases: [],
  setAllCases: () => {},
  selectedCase: [],
  setSelectedCase: () => {},
});

export const SelectedCaseProvider = ({
  children,
}: SelectedCaseContextProps) => {
  const [isClear, setIsClear] = useState<boolean>(false);
  const [selectedCase, setSelectedCase] = useState<ElementType[]>([]);
  const [allCases, setAllCases] = useState<ElementType[]>([]);

  const selectedCaseContextValue: SelectedCaseContextValue = {
    isClear,
    setIsClear,
    allCases,
    setAllCases,
    selectedCase,
    setSelectedCase,
  };

  return (
    <SelectedCaseContext.Provider value={selectedCaseContextValue}>
      {children}
    </SelectedCaseContext.Provider>
  );
};
