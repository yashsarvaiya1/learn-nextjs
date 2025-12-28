// components/zustand-demo/CounterControls.tsx
'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useCounterStore } from '@/stores/zustand-demo/counterStore'

export default function CounterControls() {
  // Get actions from store (not the count value!)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)
  const incrementBy = useCounterStore((state) => state.incrementBy)

  return (
    <Card className="p-6 bg-green-50 border-2 border-green-200">
      <h3 className="text-xl font-bold mb-4 text-green-700">
        🎮 Counter Controls
      </h3>
      <div className="flex flex-col gap-3">
        <Button 
          onClick={increment} 
          className="w-full bg-green-600 hover:bg-green-700"
          size="lg"
        >
          ➕ Add 1
        </Button>
        
        <Button 
          onClick={decrement} 
          variant="outline" 
          className="w-full border-green-600 text-green-600"
          size="lg"
        >
          ➖ Subtract 1
        </Button>
        
        <Button 
          onClick={() => incrementBy(5)} 
          className="w-full bg-purple-600 hover:bg-purple-700"
          size="lg"
        >
          🚀 Add 5
        </Button>
        
        <Button 
          onClick={reset} 
          variant="destructive" 
          className="w-full"
          size="lg"
        >
          🔄 Reset to 0
        </Button>
      </div>
      <div className="mt-4 text-xs text-gray-500 bg-white p-2 rounded">
        💡 This component only <strong>changes</strong> the count
      </div>
    </Card>
  )
}
