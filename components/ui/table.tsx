interface TableProps {
  headers: string[];
  data: (string | number)[][];
}

export const Table = ({ headers, data }: TableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          {/* HEADER */}
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-gray-100">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="group transition-colors hover:bg-gray-50"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-6 py-4 text-gray-700 ${
                      cellIndex === 0
                        ? "font-medium text-gray-900"
                        : "text-gray-600"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
