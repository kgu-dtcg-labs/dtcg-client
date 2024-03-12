import { TABLE_HEADER } from '@constants/header';

const ResultTable = () => {
  return (
    <table className="table-fixed text-center font-semibold">
      <thead>
        <tr>
          {TABLE_HEADER.map((item, index) => (
            <td key={index} className="min-w-32 py-4 border bg-gray-50">
              {item.name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 border"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
