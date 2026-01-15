"use client";

import { useEffect, useState } from "react";

export default function CountDown() {
  const [input, setInput] = useState(10);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setTimer(input);
  }, [input]);
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {setTimer((t) => t - 1)}, 100);

    return () => clearInterval(interval);
  }, [timer]);

  return <div>
    <p>Set Timeout</p>
    <input type="number"  value={input} onChange={(e)=>setInput(Number(e.target.value))} />
    <p>time left: {timer/10}</p>
  </div>;
}
