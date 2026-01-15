'use client'
import { useState, useRef, useEffect } from 'react'

export default function PreviousValue() {
  const [count, setCount] = useState(0)
  const prevCountRef = useRef<number>(null)

  useEffect(() => {
    // Save current count as "previous" for next render
    prevCountRef.current = count
  }, [count])

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow">
      <div className="space-y-4 text-center">
        <div className="text-4xl font-bold text-blue-600">{count}</div>
        <div className="text-lg text-gray-500">
          Previous: {prevCountRef.current ?? 'none'}
        </div>
        <button
          onClick={() => setCount(c => c + 1)}
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          +1
        </button>
      </div>
    </div>
  )
}
