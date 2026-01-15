'use client'

import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'

export interface CanvasHandle {
  clear: () => void
  drawCircle: (x: number, y: number, color?: string) => void
}

const CanvasTool = forwardRef<CanvasHandle>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useImperativeHandle(ref, () => ({
    clear: () => {
      const canvas = canvasRef.current
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    },
    drawCircle: (x, y, color = 'red') => {
      const canvas = canvasRef.current
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.beginPath()
        ctx.arc(x, y, 25, 0, 2 * Math.PI)
        ctx.fillStyle = color
        ctx.fill()
      }
    }
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = 400
      canvas.height = 200
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="w-full max-w-md border rounded-lg shadow-lg" 
    />
  )
})

export default CanvasTool
