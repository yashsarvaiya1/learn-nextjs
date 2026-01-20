'use client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface DogImage {
  url: string;
}

interface Post {
  id: number;
  title: string;
}

export default function SearchRefetch() {
  const [searchTerm, setSearchTerm] = useState('');

  // Query 1: Random dog image
  const { data: dogData, isPending: dogPending, refetch: refetchDog } = useQuery<DogImage>({
    queryKey: ['randomDog'],
    queryFn: () =>
      fetch('https://random.dog/woof.json')
        .then(res => res.json()),
    staleTime: 0 // Always fetch fresh
  });

  // Query 2: Filtered posts (refetches when searchTerm changes)
  const { data: posts, isPending: postsPending } = useQuery<Post[]>({
    queryKey: ['posts', searchTerm], // Dependency on searchTerm
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        .then(res => res.json())
        .then((data: Post[]) => 
          searchTerm 
            ? data.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
            : data
        )
  });

  return (
    <div className="min-h-screen from-orange-50 to-yellow-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section 1: Random Dog */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">🐕 Random Dog</h2>
            <button
              onClick={() => refetchDog()}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              New Dog 🔄
            </button>
          </div>
          
          {dogPending ? (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-xl">
              <div className="animate-bounce text-4xl">🐶</div>
            </div>
          ) : (
            <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
              <img 
                src={dogData?.url} 
                alt="Random dog"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Section 2: Searchable Posts */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🔍 Search Posts</h2>
          
          <input
            type="text"
            placeholder="Type to filter posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors mb-6"
          />

          {postsPending ? (
            <div className="text-center py-8 text-gray-500">Searching...</div>
          ) : posts?.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No posts found 😢</div>
          ) : (
            <div className="space-y-3">
              {posts?.map(post => (
                <div 
                  key={post.id} 
                  className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 capitalize">{post.title}</h3>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
