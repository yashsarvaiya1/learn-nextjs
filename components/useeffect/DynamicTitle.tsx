"use client";

import { useEffect, useState } from "react";

export default function DynamicTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name ? `hello ${name}` : "Dynamic Title";
  }, [name]);

  return (
    <div>
      <h2>Dynamic Title</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
