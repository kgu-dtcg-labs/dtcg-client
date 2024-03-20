import { TABLE_HEADER } from '@constants/header';
import { ElementType } from '@type/element';

interface ResultProps {
  result: ElementType[] | null;
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
        <tr>
          {result?.length === 0 ? (
            <td className="px-4 py-2 text-left" colSpan={99}>
              현재 생성된 데이터가 없습니다.
            </td>
          ) : (
            <>
              {result?.map((item, index) => (
                <td key={index} className="px-4 py-1 text-center border">
                  {item.name}
                </td>
              ))}
            </>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
