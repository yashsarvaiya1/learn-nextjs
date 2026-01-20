'use client';
import DataTable from '@/components/props/table-demo/DataTable';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

export default function TableDemo() {
  const users: User[] = [
    { id: 1, name: 'John', email: 'john@test.com' },
    { id: 2, name: 'Jane', email: 'jane@test.com' },
  ];

  const products: Product[] = [
    { id: 1, title: 'Laptop', price: 999 },
    { id: 2, title: 'Mouse', price: 29 },
  ];

  return (
    <div className="p-8 space-y-8">
      <DataTable
        data={users}
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
        ]}
        onRowClick={(user) => alert(user.name)}
      />

      <DataTable
        data={products}
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'title', label: 'Product' },
          { key: 'price', label: 'Price' },
        ]}
        onRowClick={(product) => alert(product.title)}
      />
    </div>
  );
}
