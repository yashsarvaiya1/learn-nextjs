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
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addItem = () => {
    // ✅ Validation
    if (name.trim() === '' || price === '' || Number(price) <= 0) return;

    // ✅ Check for duplicate (case-insensitive)
    const existingItem = cartItems.find(
      (ci) => ci.name.toLowerCase() === name.toLowerCase()
    );

    if (existingItem) {
      // ✅ Item exists - increase quantity
      setCartItems(
        cartItems.map((ci) =>
          ci.id === existingItem.id
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        )
      );
      setName("");
      setPrice("");
    } else {
      // ✅ New item - add to cart
      setCartItems([
        ...cartItems,
        {
          id: crypto.randomUUID(),
          name: name.trim(),
          price: Number(price),
          quantity: 1,
        },
      ]);
      setName("");
      setPrice("");
    }
  };

  const increaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((ci) =>
        ci.id === id ? { ...ci, quantity: ci.quantity + 1 } : ci
      )
    );
  };

  const decreaseQuantity = (id: string) => {  // ✅ Fixed typo
    const item = cartItems.find(ci => ci.id === id);
    
    if (item && item.quantity === 1) {
      // ✅ Remove if quantity becomes 0
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((ci) =>
          ci.id === id ? { ...ci, quantity: ci.quantity - 1 } : ci
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((ci) => ci.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Fixed: Sum of quantities
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  // ✅ Fixed: Added .toFixed(2) for proper currency display
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="font-mono font-bold text-xl space-y-4 max-w-2xl p-10 border-4 border-green-400">
      <h1 className="text-3xl">🛒 Shopping Cart</h1>

      {/* Add Item Form */}
      <div className="flex flex-col gap-4 border-2 p-4">
        <div>
          <label>Name: </label>
          <input
            className="border-2 border-black p-2 w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name"
          />
        </div>

        <div>
          <label>Price: </label>
          <input
            className="border-2 border-black p-2 w-full"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>

        <button
          className="border-2 border-blue-500 px-4 py-2 text-2xl hover:bg-blue-50 disabled:opacity-50"
          onClick={addItem}
          disabled={name.trim() === '' || price === '' || Number(price) <= 0}
        >
          Add Item
        </button>
      </div>

      {/* Cart Summary */}
      <div className="border-2 border-purple-500 p-4">
        <h2 className="text-2xl mb-2">📊 Summary</h2>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>

      {/* Clear Cart */}
      {cartItems.length > 0 && (
        <button
          className="border-2 border-red-500 px-4 py-2 text-2xl hover:bg-red-50 w-full"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      )}

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 py-8">Cart is empty 🛒</p>
        ) : (
          cartItems.map((ci) => (  // ✅ Use ci.id as key!
            <div key={ci.id} className="border-2 border-red-400 p-4">
              <div className="mb-2">
                <p className="text-2xl">{ci.name}</p>
                <p>Price: ${ci.price.toFixed(2)}</p>
                <p>Quantity: {ci.quantity}</p>
                <p className="text-green-600">
                  Subtotal: ${(ci.quantity * ci.price).toFixed(2)}
                </p>
              </div>
              
              <div className="flex gap-2">
                <button
                  className="border-2 border-blue-500 px-6 py-2 hover:bg-blue-50 disabled:opacity-50"
                  onClick={() => decreaseQuantity(ci.id)}
                >
                  -
                </button>
                <button
                  className="border-2 border-blue-500 px-6 py-2 hover:bg-blue-50"
                  onClick={() => increaseQuantity(ci.id)}
                >
                  +
                </button>
                <button
                  className="border-2 border-red-500 px-6 py-2 hover:bg-red-50 ml-auto"
                  onClick={() => removeItem(ci.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
