'use client';
import { useCartStore } from '@/stores/zustand/cartStore';
import { useUserStore } from '@/stores/zustand/userStore';
import { useState } from 'react';

export default function MultipleStores() {
  const { user, login, logout } = useUserStore();
  const { items, addItem, removeItem, clearCart } = useCartStore();
  const [newItem, setNewItem] = useState('');

  const handleLogin = () => {
    login('John Doe', 'john@example.com');
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      addItem(newItem);
      setNewItem('');
    }
  };

  return (
    <div className="min-h-screen from-orange-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        
        {/* User Store */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">👤 User Store</h2>
          
          {user ? (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{user.name}</p>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
              <button
                onClick={logout}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Login as John
            </button>
          )}
        </div>

        {/* Cart Store */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            🛒 Cart ({items.length})
          </h2>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
              placeholder="Add item..."
              className="flex-1 px-4 py-2 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
            />
            <button
              onClick={handleAddItem}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
            >
              +
            </button>
          </div>

          {items.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Cart is empty</p>
          ) : (
            <>
              <div className="space-y-2 mb-4">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-orange-50 p-3 rounded-lg"
                  >
                    <span className="text-gray-800">{item}</span>
                    <button
                      onClick={() => removeItem(item)}
                      className="text-red-500 hover:text-red-700 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={clearCart}
                className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Clear All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
