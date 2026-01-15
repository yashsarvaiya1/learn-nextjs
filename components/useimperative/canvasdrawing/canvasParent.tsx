'use client'

import { useRef } from 'react'
import CanvasTool, { CanvasHandle } from './canvasChild'

export default function CanvasParent() {
  const canvasRef = useRef<CanvasHandle>(null)

  const drawRed = () => {
    canvasRef.current?.drawCircle(100, 100, 'red')
  }

  const drawBlue = () => {
    canvasRef.current?.drawCircle(300, 100, 'blue')
  }

  const clearCanvas = () => {
    canvasRef.current?.clear()
  }

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Canvas Controls</h2>
      
      <CanvasTool ref={canvasRef} />
      
      <div className="grid grid-cols-3 gap-2">
        <button 
          onClick={drawRed} 
          className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Red
        </button>
        <button 
          onClick={drawBlue} 
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Blue
        </button>
        <button 
          onClick={clearCanvas} 
          className="p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Clear
        </button>
      </div>
    </div>
  )
}
