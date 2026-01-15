"use client";

import { useEffect, useState } from "react";

export default function RemeberName() {
  const [name, setName] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("name");
    if (stored) {
      setName(stored);
    }
  }, []);

  useEffect(() => {
    if (name === "") {
      localStorage.removeItem("name");
    }
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="p-6 max-w-sm w-full bg-white rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Remember your name</h2>
        <input
          className="w-full p-3 border rounded-lg mb-3"
          placeholder="Type your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text-slate-600">
          {name ? `Welcome back, ${name}!` : "No name saved yet."}
        </p>
        <button
          onClick={() => setName("")}
          className="px-4 py-2 border-blue-600 border-2"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
