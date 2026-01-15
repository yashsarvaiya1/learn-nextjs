"use client";

import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(0);
  const [mls, setMls] = useState(0);

  useEffect(() => {
    if (!flag) return;
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    const interval1 = setInterval(() => {
      setMls((t) => t < 10 ? t + 1 : 0);
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(interval1);
    };
  }, [flag]);

  return (
    <div>
      <h2>
        Stop watch: {time}.{mls}
      </h2>
      <h2>flag status: {flag ? "TRUE" : "FALSE"}</h2>
      <button onClick={() => setFlag(!flag)}>{flag ? 'stop' : 'start'}</button>
      <button
        onClick={() => {
          setTime(0);
          setMls(0)
        }}
      >
        Reset
      </button>
    </div>
  );
}
