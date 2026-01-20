'use client';

import Button from "./ButtonProps";

export default function ButtonDemo() {
  return (
    <div className="p-8">
      <Button text="Click me" onClick={() => alert('Clicked!')} />
      <Button text="Disabled" onClick={() => {}} disabled />
    </div>
  );
}
