'use client';
import { useShoppingStore } from '@/stores/zustand/shoppingStore';
import { useEffect, useState } from 'react';

const PRODUCTS = [
  { id: 1, name: '🍕 Pizza', price: 12.99 },
  { id: 2, name: '🍔 Burger', price: 8.99 },
  { id: 3, name: '🍜 Ramen', price: 10.99 },
  { id: 4, name: '🌮 Tacos', price: 6.99 },
  { id: 5, name: '🍣 Sushi', price: 15.99 },
  { id: 6, name: '🍰 Cake', price: 4.99 },
];

export default function ShoppingStore() {
  const {
    cart,
    totalItems,
    totalPrice,
    hydrated,
    addProduct,
    removeProduct,
    updateQuantity,
    clearCart
  } = useShoppingStore();

  // Prevent hydration mismatch in Next.js
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center from-blue-500 to-purple-600">
        <div className=" text-2xl animate-pulse">
          🔄 Rehydrating from localStorage...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 mb-8 ">
          <h1 className="text-4xl font-bold mb-2">🛒 Persistent Shopping Cart</h1>
          <p className="text-purple-100">
            ✨ Refresh page or open new tab → cart persists & syncs!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Products Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Products</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {PRODUCTS.map((product) => {
                const inCart = cart.find(p => p.id === product.id);
                
                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6"
                  >
                    <div className="text-6xl mb-3 text-center">
                      {product.name.split(' ')[0]}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      {product.name.split(' ')[1]}
                    </h3>
                    <p className="text-2xl font-bold text-purple-600 mb-4 text-center">
                      ${product.price.toFixed(2)}
                    </p>
                    
                    {inCart ? (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(product.id, inCart.quantity - 1)}
                          className="flex-1 bg-red-500  py-2 rounded-lg font-semibold hover:bg-red-600"
                        >
                          −
                        </button>
                        <span className="text-2xl font-bold text-gray-800 w-12 text-center">
                          {inCart.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, inCart.quantity + 1)}
                          className="flex-1 bg-green-500  py-2 rounded-lg font-semibold hover:bg-green-600"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addProduct(product)}
                        className="w-full from-purple-500 to-blue-500  py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                🛒 Cart
                {totalItems > 0 && (
                  <span className="bg-purple-500  text-sm px-3 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-6xl mb-4">🛍️</div>
                  <p>Cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gray-50 rounded-lg p-4 flex items-center gap-3"
                      >
                        <div className="text-3xl">{item.name.split(' ')[0]}</div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">
                            {item.name.split(' ')[1]}
                          </p>
                          <p className="text-sm text-gray-600">
                            ${item.price} × {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-purple-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeProduct(item.id)}
                            className="text-red-500 text-sm hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="border-t-2 border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-lg">
                      <span className="text-gray-600">Items:</span>
                      <span className="font-semibold">{totalItems}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold">
                      <span className="text-gray-800">Total:</span>
                      <span className="text-purple-600">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={clearCart}
                    className="w-full mt-6 bg-red-500  py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
                  >
                    Clear Cart
                  </button>
                </>
              )}

              {/* Sync Indicator */}
              <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700 text-center">
                  ✅ Synced to localStorage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Test Instructions */}
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-yellow-800 mb-3">🧪 Test Multi-Tab Sync:</h3>
          <ol className="list-decimal list-inside space-y-2 text-yellow-900">
            <li>Add products to cart in this tab</li>
            <li>Open this page in a new tab (Ctrl+Click or Cmd+Click)</li>
            <li>See the cart already populated (localStorage persistence)</li>
            <li>Modify cart in either tab → other tabs update instantly</li>
            <li>Refresh any tab → cart data persists</li>
            <li>Close browser → reopen → cart still there!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
