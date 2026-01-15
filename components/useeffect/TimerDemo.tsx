"use client";
import { useEffect, useState } from "react";

export default function TimerDemo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((p) => p + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Time: {seconds}</h2>
    </div>
  );
}
