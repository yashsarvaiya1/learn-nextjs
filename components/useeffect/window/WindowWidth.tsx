"use client";

import { useEffect, useState } from "react";

export default function WindowWidth() {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Window width</h2>
      <p className="text-3xl text-blue-600">{width}</p>
    </div>
  );
}
