'use client'
import { useRef, useEffect } from 'react'

export default function ScrollToBottom() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to bottom when new messages would come
    divRef.current?.scrollTo({
      top: divRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className="p-4 h-screen mx-auto">
      <div 
        ref={divRef}
        className="h-full p-4 border rounded-lg overflow-auto bg-gray-50"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="h-full from-blue-200 to-white mb-4 rounded p-2">
          Scroll up to see me
        </div>
        <div className='h-full'>
    
        </div>
        <p>New message (auto-scrolls here)</p>
      </div>
    </div>
  )
}
