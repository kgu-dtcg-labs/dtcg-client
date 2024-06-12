import { Button } from '@components/common/Button/Button';
import { useSetParsedDataStore } from '@store/parsedData';
import { useGetResultStore } from '@store/result';
import { parseScenariosByLayer } from '@utils/element';
import { IoAnalyticsOutline } from 'react-icons/io5';

const ParsingScenarioButton = () => {
  const result = useGetResultStore();
  const setParsedData = useSetParsedDataStore();

  return (
    <Button
      color={!result || Object.keys(result).length === 0 ? 'disabled' : 'black'}
      className="h-10 font-semibold w-28"
      onClick={() => setParsedData(parseScenariosByLayer(result))}
      icon={<IoAnalyticsOutline />}
      disabled={!result || Object.keys(result).length === 0}
    >
      정제하기
    </Button>
  );
};

export default ParsingScenarioButton;
