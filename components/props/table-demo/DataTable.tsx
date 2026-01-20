interface Column<T> {
  key: keyof T;
  label: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick: (item: T) => void;
}

export default function DataTable<T extends { id: number }>({ 
  data, 
  columns, 
  onRowClick 
}: DataTableProps<T>) {
  return (
    <table className="border w-full">
      <thead>
        <tr className="bg-gray-100">
          {columns.map(col => (
            <th key={String(col.key)} className="border p-2">{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr 
            key={item.id} 
            onClick={() => onRowClick(item)}
            className="cursor-pointer hover:bg-gray-50"
          >
            {columns.map(col => (
              <td key={String(col.key)} className="border p-2">
                {String(item[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
