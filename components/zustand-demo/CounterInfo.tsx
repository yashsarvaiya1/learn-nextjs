// components/zustand-demo/CounterInfo.tsx
'use client'

import { Card } from '@/components/ui/card'
import { useCounterStore } from '@/stores/zustand-demo/counterStore'

export default function CounterInfo() {
  // Read count from store
  const count = useCounterStore((state) => state.count)

  // Calculate info based on count
  const isEven = count % 2 === 0
  const isPositive = count > 0
  const isNegative = count < 0
  const isZero = count === 0

  return (
    <Card className="p-6 bg-purple-50 border-2 border-purple-200">
      <h3 className="text-xl font-bold mb-4 text-purple-700">
        ℹ️ Counter Information
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-600">Number Type</p>
          <p className="text-lg font-bold">
            {isEven ? '✅ Even' : '❌ Odd'}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-600">Sign</p>
          <p className="text-lg font-bold">
            {isPositive ? '➕ Positive' : isNegative ? '➖ Negative' : '0️⃣ Zero'}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-600">Absolute Value</p>
          <p className="text-lg font-bold">{Math.abs(count)}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-600">Squared</p>
          <p className="text-lg font-bold">{count * count}</p>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500 bg-white p-2 rounded">
        💡 This component <strong>reads and calculates</strong> based on count
      </div>
    </Card>
  )
}
