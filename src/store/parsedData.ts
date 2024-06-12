import { ParsedScenarioLayer } from '@type/element';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

export const parsedDataState = atom<ParsedScenarioLayer>({
  key: 'parsed-data',
  default: {},
});

export const useParsedDataStore = () => useRecoilState(parsedDataState);

export const useGetParsedDataStore = () => useRecoilValue(parsedDataState);

export const useSetParsedDataStore = () => useSetRecoilState(parsedDataState);
