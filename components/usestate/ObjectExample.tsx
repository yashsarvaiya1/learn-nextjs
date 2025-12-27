'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'

export default function ObjectExample() {
  const [user, setUser] = useState({
    name: 'John',
    age: 25,
    email: 'john@example.com'
  })

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-2 font-semibold">Name:</label>
        <Input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      
      <div>
        <label className="block mb-2 font-semibold">Age:</label>
        <Input
          type="number"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
        />
      </div>
      
      <div>
        <label className="block mb-2 font-semibold">Email:</label>
        <Input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">User Object:</h3>
        <pre className="text-sm">{JSON.stringify(user, null, 3)}</pre>
      </div>
    </div>
  )
}
