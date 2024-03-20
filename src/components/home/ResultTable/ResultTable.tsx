import { TABLE_HEADER } from '@constants/header';
import { ElementType } from '@type/element';

interface ResultProps {
  result: ElementType[][] | null;
}

const ResultTable = ({ result }: ResultProps) => {
  return (
    <table className="text-center table-fixed select-none">
      <thead>
        <tr className="font-medium border-b divide-x">
          {TABLE_HEADER.map((item, index) => (
            <td key={index} className="py-4 min-w-32">
              {item.name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {result?.length === 0 ? (
          <tr>
            <td className="px-4 py-2 text-left">데이터 없음</td>
          </tr>
        ) : (
          <>
            {result?.map((arr, index) => (
              <tr key={index}>
                {arr.map((item, index) => (
                  <td
                    key={index}
                    className="px-4 py-1 text-center border bg-white dark:bg-gray-400"
                  >
                    {item.name}
                  </td>
                ))}
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default ResultTable;
