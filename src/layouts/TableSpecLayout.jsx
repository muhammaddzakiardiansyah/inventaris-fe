const TableSpecLayout = (props) => {
    const {children, tableSpecTitle} = props;
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">{tableSpecTitle}</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-bold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">No</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Nama</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spek</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Tempat</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Alat</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
               {children}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSpecLayout;
