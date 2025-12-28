// components/zustand-demo/CounterDisplay.tsx
'use client'

import { Card } from '@/components/ui/card'
import { useCounterStore } from '@/stores/zustand-demo/counterStore'

export default function CounterDisplay() {
  // Subscribe to count from store
  const count = useCounterStore((state) => state.count)

  return (
    <Card className="p-6 bg-blue-50 border-2 border-blue-200">
      <h3 className="text-xl font-bold mb-4 text-blue-700">
        📊 Counter Display
      </h3>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Current Count:</p>
        <p className="text-7xl font-bold text-blue-600">{count}</p>
      </div>
      <div className="mt-4 text-xs text-gray-500 bg-white p-2 rounded">
        💡 This component only <strong>reads</strong> the count
      </div>
    </Card>
  )
}
