"use client";

import { useEffect, useState } from "react";

export default function RenderCount() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // setRenderCount(prev => prev + 1)
    console.log("Effect ran after render");
  });

  return (
    <div>
      <h2>
        Press button:{" "}
        <button onClick={() => setCount((p) => p + 1)}>{count}</button>
      </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <h1>{renderCount}</h1> */}
    </div>
  );
}
