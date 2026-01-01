"use client";
import { useState } from "react";

export default function CounterComponent() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="space-y-4 flex-col gap-5">
      <p className="text-xl ">Count: {count}</p>
      <p> Status: {count > 0 ? 'positive' : (count < 0 ? 'negative' : 'zero')}</p>
      <div>
        <button onClick={increment} className="border p-3 text-lg">Increment</button>
        <button onClick={decrement} className="border p-3 text-lg">Decrement</button>
        <button onClick={reset} className="border p-3 text-lg">reset</button>
      </div>
      <p>Type: {typeof count}</p>
    </div>
  );
}
