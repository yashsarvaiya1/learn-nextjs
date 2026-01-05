"use client";

import { useState } from "react";

type Cart = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export default function ShoppingComponent() {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");

  const addItem = () => {
    const itemIndex = cartItems.findIndex((ci) => ci.name === name);
    if (itemIndex !== -1) {
      setCartItems(
        cartItems.map((ci, index) =>
          index === itemIndex
            ? {
                ...ci,
                quantity: ci.quantity + 1,
              }
            : ci
        )
      );
      setname("");
    } else {
      setCartItems([
        ...cartItems,
        {
          id: crypto.randomUUID(),
          name: name,
          price: Number(price),
          quantity: 1,
        },
      ]);
      setname("");
      setPrice("");
    }
  };

  const increaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((ci, index) =>
        ci.id === id
          ? {
              ...ci,
              quantity: ci.quantity + 1,
            }
          : ci
      )
    );
  };

  const decreseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((ci, index) =>
        ci.id === id
          ? {
              ...ci,
              quantity: ci.quantity - 1,
            }
          : ci
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((ci) => ci.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.length;
const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="font-mono font-bold text-xl space-y-4 w-2xl p-10 border-4 border-green-400">
      <div className="flex  flex-col gap-4">
        <label>Name: </label>
        <input
          className="border-2 border-black"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <label>Price: </label>
        <input
          className="border-2 border-black"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          className="border-2 border-blue-500 px-4 py-2 text-2xl"
          onClick={() => addItem()}
          disabled={name === '' || price === ''}
        >
          Add Item
        </button>
      </div>

      {cartItems &&
        cartItems.map((ci) => (
          <div key={ci.id}>
            <div className="border-2 border-red-400">
              <p>ID: {ci.id}</p>
              <p>Name: {ci.name}</p>
              <p>Price: {ci.price}</p>
              <p>Quantity: {ci.quantity}</p>
              <p>Total Item Price: {ci.quantity * ci.price}</p>
            </div>
            <div>
              <button
                className="border-2 border-blue-500 px-4 py-2 text-2xl"
                disabled={ci.quantity < 2}
                onClick={() => decreseQuantity(ci.id)}
              >
                -
              </button>
              <button
                className="border-2 border-blue-500 px-4 py-2 text-2xl"
                onClick={() => increaseQuantity(ci.id)}
              >
                +
              </button>
              <button
                className="border-2 border-blue-500 px-4 py-2 text-2xl"
                onClick={() => removeItem(ci.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}

        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice ?? ''}</p>

      <button
        className="border-2 border-blue-500 px-4 py-2 text-2xl"
        onClick={() => clearCart()}
      >
        Clear Cart
      </button>
    </div>
  );
}
