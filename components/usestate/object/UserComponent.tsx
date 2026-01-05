'use client'

import { useState } from 'react'
import AgeComponent from '@/components/usestate/numbers/AgeComponent';

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

  // TODO: Implement these functions

  const updateName = (name: string) => {
    // Update name property only
    setUser({...user, name : name})
  }

  const updateEmail = (email: string) => {
    setUser({...user, email : email})
    // Update email property only
  }

  const updateAge = (age: number) => {
    // Update age property only
    setUser({...user, age : age})
  }

  const updateBio = (bio: string) => {
    // Update bio property only
    setUser({...user, bio : bio})
  }

  const toggleActive = () => {
    setUser({...user, isActive : !user.isActive})
    // Toggle isActive property
  }

  const resetProfile = () => {
    setUser(initialUser)
    // Reset to initial state
  }

  const isValidProfile = (user.name && user.age && user.bio && user.email && user.isActive)  // TODO: Check if all fields are filled

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
        className="border px-4 py-2"
      >
        Reset Profile
      </button>
    </div>
  )
}
