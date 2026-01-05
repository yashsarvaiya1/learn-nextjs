'use client'

import { useState } from 'react'

type User = {
  name: string
  email: string
  age: number
  bio: string
  isActive: boolean
}

export default function UserComponent() {
  const initialUser: User = {
    name: '',
    email: '',
    age: 0,
    bio: '',
    isActive: false
  }

  const [user, setUser] = useState<User>(initialUser)

  // ✅ Using property shorthand
  const updateName = (name: string) => {
    setUser({ ...user, name })
  }

  const updateEmail = (email: string) => {
    setUser({ ...user, email })
  }

  const updateAge = (age: number) => {
    setUser({ ...user, age })
  }

  const updateBio = (bio: string) => {
    setUser({ ...user, bio })
  }

  const toggleActive = () => {
    setUser({ ...user, isActive: !user.isActive })
  }

  const resetProfile = () => {
    setUser(initialUser)
  }

  // ✅ Fixed: Don't require isActive, validate required fields only
  const isValidProfile = 
    user.name.trim() !== '' &&
    user.email.trim() !== '' &&
    user.age > 0 &&
    user.bio.trim() !== ''

  return (
    <div className="p-8 max-w-2xl mx-auto font-mono">
      <h1 className="text-2xl font-bold mb-4">👤 User Profile</h1>

      {/* Input Form */}
      <div className="border-2 p-4 mb-4 space-y-3">
        <div>
          <label className="block font-bold">Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => updateName(e.target.value)}
            placeholder="Enter name"
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-bold">Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => updateEmail(e.target.value)}
            placeholder="Enter email"
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-bold">Age:</label>
          <input
            type="number"
            value={user.age || ''}
            onChange={(e) => updateAge(Number(e.target.value))}
            placeholder="Enter age"
            className="border p-2 w-full"
            min="0"
          />
        </div>

        <div>
          <label className="block font-bold">Bio:</label>
          <textarea
            value={user.bio}
            onChange={(e) => updateBio(e.target.value)}
            placeholder="Tell us about yourself"
            className="border p-2 w-full"
            rows={3}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={user.isActive}
            onChange={toggleActive}
            className="w-4 h-4"
          />
          <label className="font-bold">Active Account</label>
        </div>
      </div>

      {/* Profile Display */}
      <div className="border-2 p-4 mb-4">
        <h2 className="font-bold text-xl mb-2">📋 Profile Preview</h2>
        <p>Name: {user.name || '(empty)'}</p>
        <p>Email: {user.email || '(empty)'}</p>
        <p>Age: {user.age || '(empty)'}</p>
        <p>Bio: {user.bio || '(empty)'}</p>
        <p>Status: {user.isActive ? '✅ Active' : '❌ Inactive'}</p>
      </div>

      {/* Validation Status */}
      <div className="border-2 p-4 mb-4">
        <p className="font-bold">
          Profile Valid: {isValidProfile ? '✅ Yes' : '❌ No'}
        </p>
      </div>

      {/* Actions */}
      <button
        onClick={resetProfile}
        className="border-2 border-red-500 px-4 py-2 hover:bg-red-50"
      >
        Reset Profile
      </button>
    </div>
  )
}
