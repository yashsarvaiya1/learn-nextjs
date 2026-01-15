'use client';
import { useQuery } from '@tanstack/react-query';

interface User { id: number; name: string; email: string; }

export default function BasicFetch() {
  const { data, isPending, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  });

  if (isPending) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {(error as Error).message}</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map(user => (
          <div key={user.id} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
