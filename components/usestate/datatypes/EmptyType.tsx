'use client'

import { useState } from "react"

// Define types first (BEST PRACTICE!)
type User = {
  id: number
  name: string
  email: string
}

type Todo = {
  id: number
  text: string
  completed: boolean
}

type Settings = {
  theme: 'dark' | 'light'
  language: string
  notification: boolean
}

export default function EmptyAndUndefinedTypes() {
  // ========================================
  // SECTION 1: EMPTY VALUES (No ?? needed!)
  // ========================================
  
  // STRING - empty
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  
  // NUMBER - zero
  const [count, setCount] = useState<number>(0)
  const [age, setAge] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  
  // BOOLEAN - false
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  // ARRAY of STRINGS - empty
  const [tags, setTags] = useState<string[]>([])
  const [names, setNames] = useState<string[]>([])
  
  // ARRAY of NUMBERS - empty
  const [numbers, setNumbers] = useState<number[]>([])
  const [scores, setScores] = useState<number[]>([])
  
  // ARRAY of OBJECTS - empty
  const [users, setUsers] = useState<User[]>([])
  const [todos, setTodos] = useState<Todo[]>([])
  
  // OBJECT - with default empty values
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: ''
  })
  
  // COMPLEX OBJECT - with default values
  const [settings, setSettings] = useState<Settings>({
    theme: 'light',
    language: 'en',
    notification: false
  })
  
  // NESTED OBJECT - with defaults
  const [profile, setProfile] = useState<{
    name: string
    address: {
      city: string
      country: string
    }
  }>({
    name: '',
    address: {
      city: '',
      country: ''
    }
  })

  // ========================================
  // SECTION 2: UNDEFINED (Need ?? and ?.)
  // ========================================
  
  // STRING - undefined
  const [name2, setName2] = useState<string>()
  const [email2, setEmail2] = useState<string>()
  
  // NUMBER - undefined
  const [count2, setCount2] = useState<number>()
  const [age2, setAge2] = useState<number>()
  
  // BOOLEAN - undefined
  const [isActive, setIsActive] = useState<boolean>()
  
  // ARRAY of STRINGS - undefined
  const [tags2, setTags2] = useState<string[]>()
  
  // ARRAY of OBJECTS - undefined
  const [users2, setUsers2] = useState<User[]>()
  const [todos2, setTodos2] = useState<Todo[]>()
  
  // OBJECT - undefined
  const [user2, setUser2] = useState<User>()
  const [settings2, setSettings2] = useState<Settings>()
  
  // NESTED OBJECT - undefined
  const [profile2, setProfile2] = useState<{
    name: string
    address: {
      city: string
      country: string
    }
  }>()

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Empty Values vs Undefined Pattern
      </h1>

      {/* ========================================
          SECTION 1: EMPTY VALUES
          ======================================== */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">✅ SECTION 1: Empty Values (Recommended)</h2>
        <p className="text-lg">No need for ?? or ?. operators!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Primitives - Empty */}
        <div className="bg-white border-2 border-green-500 p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-4 text-green-600">Primitives (Empty)</h3>
          <div className="space-y-1 text-sm">
            <p>name: <strong>"{name}"</strong> (type: {typeof(name)})</p>
            <p>email: <strong>"{email}"</strong> (type: {typeof(email)})</p>
            <p>search: <strong>"{search}"</strong> (type: {typeof(search)})</p>
            <p>count: <strong>{count}</strong> (type: {typeof(count)})</p>
            <p>age: <strong>{age}</strong> (type: {typeof(age)})</p>
            <p>price: <strong>{price}</strong> (type: {typeof(price)})</p>
            <p>isOpen: <strong>{String(isOpen)}</strong> (type: {typeof(isOpen)})</p>
            <p>isLoading: <strong>{String(isLoading)}</strong> (type: {typeof(isLoading)})</p>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded font-mono text-xs">
            const [name, setName] = useState&lt;string&gt;('')<br/>
            const [count, setCount] = useState&lt;number&gt;(0)<br/>
            // ✅ Can use: name.length, count + 1
          </div>
        </div>

        {/* Arrays - Empty */}
        <div className="bg-white border-2 border-green-500 p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-4 text-green-600">Arrays (Empty)</h3>
          <div className="space-y-1 text-sm">
            <p>tags: <strong>[{tags.length} items]</strong> (type: {typeof(tags)})</p>
            <p>names: <strong>[{names.length} items]</strong> (type: {typeof(names)})</p>
            <p>numbers: <strong>[{numbers.length} items]</strong> (type: {typeof(numbers)})</p>
            <p>scores: <strong>[{scores.length} items]</strong> (type: {typeof(scores)})</p>
            <p>users: <strong>[{users.length} items]</strong> (type: {typeof(users)})</p>
            <p>todos: <strong>[{todos.length} items]</strong> (type: {typeof(todos)})</p>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded font-mono text-xs">
            const [todos, setTodos] = useState&lt;Todo[]&gt;([])<br/>
            // ✅ Can use: todos.map(...), todos.length
          </div>
        </div>

        {/* Objects - Empty */}
        <div className="bg-white border-2 border-green-500 p-6 rounded-lg md:col-span-2">
          <h3 className="font-bold text-xl mb-4 text-green-600">Objects (Default Values)</h3>
          <div className="space-y-1 text-sm">
            <p>user: <strong>{JSON.stringify(user)}</strong></p>
            <p>settings: <strong>{JSON.stringify(settings)}</strong></p>
            <p>profile: <strong>{JSON.stringify(profile)}</strong></p>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded font-mono text-xs">
            const [user, setUser] = useState&lt;User&gt;({'{'}id: 0, name: '', email: ''{'}'})<br/>
            // ✅ Can use: user.name, user.email (no ?. needed!)
          </div>
        </div>
      </div>

      {/* ========================================
          SECTION 2: UNDEFINED
          ======================================== */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">⚡ SECTION 2: Undefined Pattern</h2>
        <p className="text-lg">Must use ?? and ?. operators!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Primitives - Undefined */}
        <div className="bg-white border-2 border-purple-500 p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-4 text-purple-600">Primitives (undefined)</h3>
          <div className="space-y-1 text-sm">
            <p>name2: <strong>"{name2 ?? '(undefined)'}"</strong> (type: {typeof(name2)})</p>
            <p>email2: <strong>"{email2 ?? '(undefined)'}"</strong> (type: {typeof(email2)})</p>
            <p>count2: <strong>{count2 ?? '(undefined)'}</strong> (type: {typeof(count2)})</p>
            <p>age2: <strong>{age2 ?? '(undefined)'}</strong> (type: {typeof(age2)})</p>
            <p>isActive: <strong>{isActive ?? '(undefined)'}</strong> (type: {typeof(isActive)})</p>
          </div>
          <div className="mt-4 p-3 bg-purple-50 rounded font-mono text-xs">
            const [name2, setName2] = useState&lt;string&gt;()<br/>
            // ⚠️ Must use: name2 ?? '', name2?.length
          </div>
        </div>

        {/* Arrays - Undefined */}
        <div className="bg-white border-2 border-purple-500 p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-4 text-purple-600">Arrays (undefined)</h3>
          <div className="space-y-1 text-sm">
            <p>tags2: <strong>[{tags2?.length ?? 0} items]</strong> (type: {typeof(tags2)})</p>
            <p>users2: <strong>[{users2?.length ?? 0} items]</strong> (type: {typeof(users2)})</p>
            <p>todos2: <strong>[{todos2?.length ?? 0} items]</strong> (type: {typeof(todos2)})</p>
          </div>
          <div className="mt-4 p-3 bg-purple-50 rounded font-mono text-xs">
            const [todos2, setTodos2] = useState&lt;Todo[]&gt;()<br/>
            // ⚠️ Must use: todos2?.map(...), todos2?.length ?? 0
          </div>
        </div>

        {/* Objects - Undefined */}
        <div className="bg-white border-2 border-purple-500 p-6 rounded-lg md:col-span-2">
          <h3 className="font-bold text-xl mb-4 text-purple-600">Objects (undefined)</h3>
          <div className="space-y-1 text-sm">
            <p>user2: <strong>{user2?.name ?? '(undefined)'}</strong></p>
            <p>settings2: <strong>{settings2?.theme ?? '(undefined)'}</strong></p>
            <p>profile2: <strong>{profile2?.name ?? '(undefined)'}</strong></p>
          </div>
          <div className="mt-4 p-3 bg-purple-50 rounded font-mono text-xs">
            const [user2, setUser2] = useState&lt;User&gt;()<br/>
            // ⚠️ Must use: user2?.name, user2?.email ?? 'default'
          </div>
        </div>
      </div>

      {/* ========================================
          COMPARISON TABLE
          ======================================== */}
      <div className="bg-white border-2 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">📊 Comparison Table</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2">
              <th className="text-left p-2">Feature</th>
              <th className="text-left p-2">Empty Values</th>
              <th className="text-left p-2">Undefined</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-bold">String</td>
              <td className="p-2 font-mono text-xs">useState&lt;string&gt;('')</td>
              <td className="p-2 font-mono text-xs">useState&lt;string&gt;()</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-bold">Number</td>
              <td className="p-2 font-mono text-xs">useState&lt;number&gt;(0)</td>
              <td className="p-2 font-mono text-xs">useState&lt;number&gt;()</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-bold">Array</td>
              <td className="p-2 font-mono text-xs">useState&lt;T[]&gt;([])</td>
              <td className="p-2 font-mono text-xs">useState&lt;T[]&gt;()</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-bold">Object</td>
              <td className="p-2 font-mono text-xs">useState&lt;T&gt;({'{'}...{'}'})</td>
              <td className="p-2 font-mono text-xs">useState&lt;T&gt;()</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-bold">Need ?? or ?.</td>
              <td className="p-2 text-green-600 font-bold">❌ No</td>
              <td className="p-2 text-purple-600 font-bold">✅ Yes</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-bold">Type</td>
              <td className="p-2">string / number / T[]</td>
              <td className="p-2">string | undefined / number | undefined</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Recommended</td>
              <td className="p-2 text-green-600 font-bold">✅ Yes (Cleaner)</td>
              <td className="p-2 text-yellow-600 font-bold">⚠️ For optional data</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========================================
          SUMMARY
          ======================================== */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">🎯 Quick Summary</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-bold mb-2">✅ Empty Values (BEST for most cases):</p>
            <ul className="space-y-1">
              <li>• Cleaner code - no ?? or ?.</li>
              <li>• Always valid values</li>
              <li>• Use for forms, counters, lists</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">⚡ Undefined (Use when needed):</p>
            <ul className="space-y-1">
              <li>• Need ?? and ?. everywhere</li>
              <li>• Represents "not set yet"</li>
              <li>• Use for API data, optional fields</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
