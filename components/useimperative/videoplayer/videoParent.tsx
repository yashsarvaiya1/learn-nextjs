'use client'

import { useRef } from 'react'
import VideoPlayer, { VideoPlayerHandle } from './videoChild'



export default function Parent() {
  const videoRef = useRef<VideoPlayerHandle>(null)

  const playVideo = () => {
    videoRef.current?.play()
  }

  const pauseVideo = () => {
    videoRef.current?.pause()
  }

  return (
    <div className="p-8 max-w-lg mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center">Video Controls</h2>
      
      <VideoPlayer ref={videoRef} />
      
      <div className="flex gap-2 justify-center">
        <button 
          onClick={playVideo}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Play
        </button>
        <button 
          onClick={pauseVideo}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Pause
        </button>
      </div>
    </div>
  )
}
