'use client';

import { useCounterStore } from "@/stores/zustand/counterStore";


export default function BasicStore() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="min-h-screen from-purple-500 to-pink-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
          {count}
        </h1>
        
        <div className="flex gap-4 mb-4">
          <button
            onClick={increment}
            className="flex-1 bg-green-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            + Add
          </button>
          <button
            onClick={decrement}
            className="flex-1 bg-red-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-600 transition-colors"
          >
            − Subtract
          </button>
        </div>
        
        <button
          onClick={reset}
          className="w-full bg-gray-700 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
