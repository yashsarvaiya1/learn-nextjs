'use client';
import { useCounterStore } from '@/stores/zustand/counterStore';
import CounterDisplay from '@/components/props/zustand-props/CounterDisplay';

export default function PropsZustandPage() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Props + Zustand</h1>
      
      {/* Pass Zustand data as props */}
      <CounterDisplay 
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
      />
    </div>
  );
}
