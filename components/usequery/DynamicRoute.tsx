'use client';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export default function DynamicRoute() {
  const params = useParams();
  const router = useRouter();
  const userId = params.userId as string;

  const { data, isPending, error } = useQuery<User>({
    queryKey: ['user', userId], // Changes when userId changes → auto refetch
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => {
          if (!res.ok) throw new Error('User not found');
          return res.json();
        })
  });

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <div className="text-center">
          <div className="animate-pulse text-6xl mb-4">👤</div>
          <p className="text-gray-600">Loading user...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <p className="text-2xl text-red-600 mb-4">User #{userId} not found</p>
          <button 
            onClick={() => router.push('/usequery/1')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Go to User 1
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen from-purple-100 via-pink-50 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="from-purple-500 to-blue-500 p-8 text-white">
            <div className="text-6xl mb-4 text-center">👤</div>
            <h1 className="text-3xl font-bold text-center">{data.name}</h1>
            <p className="text-center text-purple-100 mt-1">@{data.username}</p>
          </div>

          {/* Details */}
          <div className="p-8 space-y-4">
            <InfoRow label="Email" value={data.email} />
            <InfoRow label="Phone" value={data.phone} />
            <InfoRow label="Website" value={data.website} />
            <InfoRow label="Company" value={data.company.name} />
          </div>

          {/* Navigation */}
          <div className="p-6 bg-gray-50 flex justify-between">
            <button
              onClick={() => router.push(`/practice2/${Math.max(1, Number(userId) - 1)}`)}
              disabled={Number(userId) <= 1}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <span className="text-gray-600 self-center">User {userId} / 10</span>
            <button
              onClick={() => router.push(`/practice2/${Math.min(10, Number(userId) + 1)}`)}
              disabled={Number(userId) >= 10}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex border-b border-gray-200 pb-3">
      <span className="font-semibold text-gray-700 w-32">{label}:</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );
}
