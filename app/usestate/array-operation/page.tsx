'use client'

import { useState } from 'react'

export default function ArrayOperationsPractice() {
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50])
  const [inputValue, setInputValue] = useState('')
  const [insertIndex, setInsertIndex] = useState(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">🔥 Array Operations Practice</h1>
          <p className="text-gray-600">Master the 5 Essential Methods</p>
        </div>

        {/* Current Array Display */}
        <div className="bg-white border-4 border-blue-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Current Array:</h2>
          <div className="flex gap-2 justify-center flex-wrap">
            {numbers.map((num, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl font-bold"
              >
                {num}
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-600">
            Length: {numbers.length} items
          </p>
        </div>

        {/* ========================================
            1. at() - ACCESS
            ======================================== */}
        <div className="bg-white border-2 border-green-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-600">
            1️⃣ at() - ACCESS Items
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold mb-2">First Item:</p>
              <p className="text-3xl font-bold text-green-600">
                {numbers.at(0) ?? 'Empty'}
              </p>
              <p className="text-sm text-gray-600 mt-2 font-mono">
                numbers.at(0)
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold mb-2">Last Item:</p>
              <p className="text-3xl font-bold text-green-600">
                {numbers.at(-1) ?? 'Empty'}
              </p>
              <p className="text-sm text-gray-600 mt-2 font-mono">
                numbers.at(-1)
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold mb-2">Second-to-Last:</p>
              <p className="text-3xl font-bold text-green-600">
                {numbers.at(-2) ?? 'Empty'}
              </p>
              <p className="text-sm text-gray-600 mt-2 font-mono">
                numbers.at(-2)
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-100 rounded font-mono text-sm">
            <p className="font-bold">✅ Practice:</p>
            <p>• numbers.at(0) → First</p>
            <p>• numbers.at(-1) → Last</p>
            <p>• numbers.at(2) → Index 2</p>
          </div>
        </div>

        {/* ========================================
            2. filter() - REMOVE
            ======================================== */}
        <div className="bg-white border-2 border-red-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            2️⃣ filter() - REMOVE Items
          </h2>

          <div className="space-y-3">
            <button
              onClick={() => setNumbers(numbers.filter((_, i) => i !== 0))}
              disabled={numbers.length === 0}
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 disabled:opacity-50"
            >
              Remove FIRST item
            </button>

            <button
              onClick={() => setNumbers(numbers.filter((_, i) => i !== numbers.length - 1))}
              disabled={numbers.length === 0}
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 disabled:opacity-50"
            >
              Remove LAST item
            </button>

            <button
              onClick={() => setNumbers(numbers.filter((_, i) => i !== 2))}
              disabled={numbers.length <= 2}
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 disabled:opacity-50"
            >
              Remove item at INDEX 2
            </button>

            <button
              onClick={() => setNumbers(numbers.filter(num => num !== 30))}
              disabled={!numbers.includes(30)}
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 disabled:opacity-50"
            >
              Remove VALUE 30
            </button>
          </div>

          <div className="mt-4 p-3 bg-red-100 rounded font-mono text-sm">
            <p className="font-bold">✅ Practice:</p>
            <p>• filter((_, i) =&gt; i !== 0) → Remove first</p>
            <p>• filter((_, i) =&gt; i !== arr.length - 1) → Remove last</p>
            <p>• filter((_, i) =&gt; i !== 2) → Remove index 2</p>
            <p>• filter(x =&gt; x !== 30) → Remove value 30</p>
          </div>
        </div>

        {/* ========================================
            3. map() - UPDATE
            ======================================== */}
        <div className="bg-white border-2 border-purple-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            3️⃣ map() - UPDATE Items
          </h2>

          <div className="space-y-3">
            <button
              onClick={() => setNumbers(numbers.map((num, i) => i === 2 ? 999 : num))}
              disabled={numbers.length <= 2}
              className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 disabled:opacity-50"
            >
              Change INDEX 2 to 999
            </button>

            <button
              onClick={() => setNumbers(numbers.map(num => num === 30 ? 999 : num))}
              disabled={!numbers.includes(30)}
              className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 disabled:opacity-50"
            >
              Change VALUE 30 to 999
            </button>

            <button
              onClick={() => setNumbers(numbers.map(num => num * 2))}
              disabled={numbers.length === 0}
              className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 disabled:opacity-50"
            >
              Multiply ALL by 2
            </button>

            <button
              onClick={() => setNumbers(numbers.map((num, i) => i === numbers.length - 1 ? 888 : num))}
              disabled={numbers.length === 0}
              className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 disabled:opacity-50"
            >
              Change LAST item to 888
            </button>
          </div>

          <div className="mt-4 p-3 bg-purple-100 rounded font-mono text-sm">
            <p className="font-bold">✅ Practice:</p>
            <p>• map((x, i) =&gt; i === 2 ? 999 : x) → Update index</p>
            <p>• map(x =&gt; x === 30 ? 999 : x) → Update by value</p>
            <p>• map(x =&gt; x * 2) → Transform all</p>
          </div>
        </div>

        {/* ========================================
            4. ...spread - ADD
            ======================================== */}
        <div className="bg-white border-2 border-blue-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            4️⃣ ...spread - ADD Items
          </h2>

          <div className="mb-4">
            <label className="block font-bold mb-2">Enter a number to add:</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="e.g., 60"
              className="border-2 p-3 w-full rounded-lg"
            />
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                if (inputValue) {
                  setNumbers([...numbers, Number(inputValue)])
                  setInputValue('')
                }
              }}
              disabled={!inputValue}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 disabled:opacity-50"
            >
              Add to END
            </button>

            <button
              onClick={() => {
                if (inputValue) {
                  setNumbers([Number(inputValue), ...numbers])
                  setInputValue('')
                }
              }}
              disabled={!inputValue}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 disabled:opacity-50"
            >
              Add to START
            </button>
          </div>

          <div className="mt-4 p-3 bg-blue-100 rounded font-mono text-sm">
            <p className="font-bold">✅ Practice:</p>
            <p>• [...numbers, 60] → Add to end</p>
            <p>• [60, ...numbers] → Add to start</p>
          </div>
        </div>

        {/* ========================================
            5. slice() - INSERT
            ======================================== */}
        <div className="bg-white border-2 border-orange-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            5️⃣ slice() - INSERT at Index
          </h2>

          <div className="mb-4 space-y-3">
            <div>
              <label className="block font-bold mb-2">Value to insert:</label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="e.g., 99"
                className="border-2 p-3 w-full rounded-lg"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">
                Insert at index: {insertIndex}
              </label>
              <input
                type="range"
                min="0"
                max={numbers.length}
                value={insertIndex}
                onChange={(e) => setInsertIndex(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-600">
                Will insert between index {insertIndex - 1} and {insertIndex}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (inputValue) {
                setNumbers([
                  ...numbers.slice(0, insertIndex),
                  Number(inputValue),
                  ...numbers.slice(insertIndex)
                ])
                setInputValue('')
              }
            }}
            disabled={!inputValue}
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 disabled:opacity-50"
          >
            INSERT at Index {insertIndex}
          </button>

          <div className="mt-4 p-3 bg-orange-100 rounded font-mono text-sm">
            <p className="font-bold">✅ Practice:</p>
            <p>• [...arr.slice(0, i), 99, ...arr.slice(i)]</p>
            <p className="text-gray-600 mt-2">
              This is the ONLY time you need slice() for insertion!
            </p>
          </div>
        </div>

        {/* ========================================
            RESET BUTTON
            ======================================== */}
        <div className="bg-white border-2 rounded-xl p-6">
          <button
            onClick={() => setNumbers([10, 20, 30, 40, 50])}
            className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600"
          >
            🔄 RESET Array to [10, 20, 30, 40, 50]
          </button>
        </div>

        {/* ========================================
            CHEAT SHEET
            ======================================== */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">📝 Cheat Sheet</h2>
          <div className="space-y-2 font-mono text-sm">
            <p><strong>1. ACCESS:</strong> arr.at(-1)</p>
            <p><strong>2. REMOVE:</strong> arr.filter((_, i) =&gt; i !== index)</p>
            <p><strong>3. UPDATE:</strong> arr.map((x, i) =&gt; i === index ? newVal : x)</p>
            <p><strong>4. ADD:</strong> [...arr, newItem]</p>
            <p><strong>5. INSERT:</strong> [...arr.slice(0, i), newItem, ...arr.slice(i)]</p>
          </div>
        </div>
      </div>
    </div>
  )
}
