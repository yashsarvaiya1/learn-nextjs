"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function ArrayEample() {
  const [items, setItems] = useState<String[]>(["apple", "banana"]);
  const [newItem, setNewItem] = useState("");

  const addItems = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item..."
        />
        <Button onClick={addItems}>Add</Button>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{item}</span>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => removeItem(index)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
