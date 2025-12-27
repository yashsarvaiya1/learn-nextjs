"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold">Count: {count}</p>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </div>
    </div>
  );
}
