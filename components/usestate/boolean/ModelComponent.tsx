"use client";
import { useState } from "react";

export default function ModelComponent() {
  const [isModel1, setIsModel1] = useState(false);
  const [isModel2, setIsModel2] = useState(false);

  const [modelCounter1, setModelCounter1] = useState(0);
  const [modelCounter2, setModelCounter2] = useState(0);

  return (
    <div className="flex flex-col text-lg font-mono gap-4">
      <button
        className="p-4 font-bold borde-2"
        onClick={() => {
          setIsModel1(true);
          setModelCounter1((p) => p + 1);
        }}
      >
        Model 1
      </button>
      {isModel1 && (
        <div className="fixed inset-0 bg-gray-500/90 flex items-center justify-center">
          <div className="bg-white w-150 h-50">
            <div className="flex justify-between text-3xl font-bold p-5">
              <p>Model 1</p>
              <button onClick={() => setIsModel1(false)}>X</button>
            </div>
            <br />
            <hr />
            <br />
            <div className="px-5">
              <p>YOu Opend this model {modelCounter1} times</p>
            </div>
          </div>
        </div>
      )}

      <button
        className="p-4 font-bold borde-2"
        onClick={() => {
          setIsModel2(true);
          setModelCounter2((p) => p + 1);
        }}
      >
        Model 2
      </button>
      {isModel2 && (
        <div className="fixed inset-0 bg-gray-500/90 flex items-center justify-center">
          <div className="bg-white w-150 h-50">
            <div className="flex justify-between text-3xl font-bold p-5">
              <p>Model 2</p>
              <button onClick={() => setIsModel2(false)}>X</button>
            </div>
            <br />
            <hr />
            <br />
            <div className="px-5">
              <p>YOu Opend this model {modelCounter2} times</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 p-5 border-2 m-2">
        <h2>Status: </h2>
        <p>Model 1 : {modelCounter1}</p>
        <p>Model 2 : {modelCounter2}</p>
      </div>
    </div>
  );
}
