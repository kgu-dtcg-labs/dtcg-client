import { TABLE_HEADER } from '@constants/header';

const ResultTable = () => {
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
          <td className="px-4 py-2 text-left" colSpan={99}>
            현재 생성된 데이터가 없습니다.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
