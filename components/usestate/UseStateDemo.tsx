"use client";

import { Card } from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
import CounterExample from "./CounterExample";
import ToggleExample from "./ToggleExample";
import FormInputExample from "./FormInputExample";
import ArrayExample from "./ArrayExample";
import ObjectExample from "./ObjectExample";

export default function UseStateDemo() {
  const [activeExample, setActiveExample] = useState<number>(1);

  const examples = [
    {
      id: 1,
      title: "simple counter",
      component: <CounterExample />,
      description: "Click Button to increase count",
    },
    {
      id: 2,
      title: "Boolean Toggle",
      component: <ToggleExample />,
      description: "Toggle Visibility on/off",
    },
    {
      id: 3,
      title: "Form Input",
      component: <FormInputExample />,
      description: "Type in input and see state change",
    },
    {
      id: 4,
      title: "Array State",
      component: <ArrayExample />,
      description: "Add/remove items from array",
    },
    {
      id: 5,
      title: "Object State",
      component: <ObjectExample />,
      description: "Update object properties",
    },
  ];

  const currentExample = examples.find((ex) => ex.id === activeExample);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">useState Hook -Example</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {examples.map((example) => (
          <Button
            key={example.id}
            variant={activeExample === example.id ? "default" : "outline"}
            onClick={() => setActiveExample(example.id)}
          >
            Example {example.title}
          </Button>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-2">
          Example {currentExample?.id}: {currentExample?.title}
        </h2>
        <p className="text-gray-600 mb-6">{currentExample?.description}</p>
        <div className="border-t pt-6">{currentExample?.component}</div>
      </Card>
    </div>
  );
}
