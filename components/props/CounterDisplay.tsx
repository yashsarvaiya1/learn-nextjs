interface CounterDisplayProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function CounterDisplay({ count, onIncrement, onDecrement }: CounterDisplayProps) {
  return (
    <div className="border p-4">
      <h2 className="text-xl">Count: {count}</h2>
      <button onClick={onIncrement} className="border px-4 py-2 m-2">+</button>
      <button onClick={onDecrement} className="border px-4 py-2 m-2">-</button>
    </div>
  );
}
