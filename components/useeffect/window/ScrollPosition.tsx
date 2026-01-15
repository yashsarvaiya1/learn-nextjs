"use client";
import { useState, useEffect } from "react";

export default function ScrollPosition() {
  const [y, setY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen">
        <div className="h-screen bg-red-200">

        </div>
        <div className="h-screen bg-orange-300">

        </div>
      <div className="fixed bottom-4 right-4 px-4 py-2 bg-black/70 text-white rounded-full text-sm">
        Scroll Y: {Math.round(y)}
      </div>
    </div>
  );
}
