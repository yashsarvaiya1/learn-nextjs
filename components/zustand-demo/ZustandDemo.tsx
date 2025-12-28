// components/zustand-demo/ZustandDemo.tsx
'use client'

import CounterDisplay from './CounterDisplay'
import CounterControls from './CounterControls'
import CounterInfo from './CounterInfo'

export default function ZustandDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🐻 Zustand Store Demo
          </h1>
          <p className="text-gray-600 text-lg">
            Three components sharing the same state - No props passed!
          </p>
        </div>

        {/* Explanation Box */}
        <div className="bg-yellow-50 border-4 border-yellow-300 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="font-bold text-2xl mb-4 text-yellow-800">
            ✨ What's Happening Here?
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-2xl mr-2">1️⃣</span>
              <span>All 3 components read from the <strong>SAME Zustand store</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-2">2️⃣</span>
              <span>Click any button in Controls → Display & Info update <strong>instantly</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-2">3️⃣</span>
              <span><strong>No props</strong> passed between components!</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-2">4️⃣</span>
              <span>Data persists in localStorage - <strong>refresh page to test!</strong></span>
            </li>
          </ul>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Display Component */}
          <CounterDisplay />

          {/* Controls Component */}
          <CounterControls />
        </div>

        {/* Info Component (Full Width) */}
        <CounterInfo />

        {/* Flow Explanation */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
          <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">
            📚 How the Flow Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">📋</div>
              <h3 className="font-bold text-blue-600 mb-2">1. Model</h3>
              <code className="text-xs bg-white px-2 py-1 rounded block">
                types.ts
              </code>
              <p className="text-sm mt-2">Defines data shape</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-4xl mb-2">📦</div>
              <h3 className="font-bold text-green-600 mb-2">2. Store</h3>
              <code className="text-xs bg-white px-2 py-1 rounded block">
                counterStore.ts
              </code>
              <p className="text-sm mt-2">Holds data + actions</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="font-bold text-purple-600 mb-2">3. Components</h3>
              <code className="text-xs bg-white px-2 py-1 rounded block">
                3 components
              </code>
              <p className="text-sm mt-2">Read & display data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
