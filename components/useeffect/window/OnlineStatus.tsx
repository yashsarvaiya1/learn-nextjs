'use client'
import { useState, useEffect } from 'react'

export default function OnlineStatus() {
  const [isOnline,setIsOnline] = useState(navigator.onLine)

  useEffect(()=>{
    function handleOnline(){
        setIsOnline(true)
    }
    function handleOffline(){
        setIsOnline(false)
    }

    window.addEventListener('online',handleOnline)
    window.addEventListener('offline',handleOffline)

    return () => {
        window.removeEventListener('online',handleOnline)
        window.removeEventListener('offline', handleOffline)
    }
  },[])

  return (
    <div className="p-4 max-w-xs mx-auto mt-4 rounded-lg shadow bg-white flex items-center gap-2">
      <span
        className={`w-3 h-3 rounded-full ${
          isOnline ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
      <span className="font-medium">
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  )
}
