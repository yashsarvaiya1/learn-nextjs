"use client";
import { useState } from "react";

export default function TextComponent() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameLength = name.length;
  const messageLength = message.length;
  const totalLength = nameLength + messageLength;

  const greeting = `Hello ${name === "" ? "guest" : name}!, ${message} `;

  return (
    <div className="font-mono text-lg px-100">
      <div className="flex flex-col gap-5">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 p-2 w-full rounded"
        />

        <label>Message: </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 p-2 w-full rounded"
        />

        <button
          onClick={() => {
            setName("");
            setMessage("");
          }}
          className="px-5 border-2 border-blue-500"
        >
          Clear Data
        </button>
      </div>
      <hr />
      <br />
      <br />
      <div className="p-5 border-2">
        <h2>Status: </h2>
        <p>Greeting: {greeting}</p>
        <p>Uppercase Name: {name.toUpperCase()}</p>
        <p>Lowercase Name: {name.toLowerCase()}</p>
        <p>Name Length: {nameLength}</p>
        <p>Message Length: {messageLength}</p>
        <p>Total Length: {totalLength}</p>
      </div>
    </div>
  );
}
