"use client";
import { useState } from "react";

export default function SearchComponent() {
  const [search, setSearch] = useState("");

  const [items, setItems] = useState(["apple", "banana", "orange", "peach"]);
  const [newItem, setNewItem] = useState("");

  const filteredItems = items.filter((i) => i.includes(search.toLowerCase()));

  return (
    <div className="font-mono text-lg space-y-4 w-200 px-20">
      <div className="flex flex-col gap-4">
        <label>Search Items: </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search apple or banana..."
        />
      </div>

      {search === "" ? (
        <div className="flex flex-col gap-4 border-2 border-blue-400">
          {items.map((i,index) => (
            <p key={index}>{i}</p>
          ))}
          <p>
            showing {items.length} / {items.length} items
          </p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="border-2 border-green-400">No Items Found!</div>
      ) : (
        <div className="flex flex-col gap-4 border-2 border-green-400">
          {filteredItems.map((fi,index) => (
            <p key={index}>{fi}</p>
          ))}
          <p>
            showing {filteredItems.length} / {items.length} items
          </p>
        </div>
      )}

      <div className="border-2 border-black flex flex-col gap-4">
        <p>trying something advance just for fun</p>
        <label>Item Name: </label>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border-black border"
        />

        <button
          className="border-2 text-bold border-green-500 px-10"
          onClick={() => {
            setItems((i) => [...i, newItem]);
            setNewItem("");
          }}
        >
          Add Item
        </button>

        {items.map((i,index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-between"
          >
            <div className="flex justify-between p-5 border-b-">
              <p>{i}</p>
              <button
                className="border-2 border-red-500 text-red-500"
                onClick={() => {
                  setItems(items.filter((_,index) => index != items.indexOf(i)));
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
