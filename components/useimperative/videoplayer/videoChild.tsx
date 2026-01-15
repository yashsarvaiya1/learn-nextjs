'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'

export interface VideoPlayerHandle {
  play: () => void
  pause: () => void
}

const VideoPlayer = forwardRef<VideoPlayerHandle>((props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current?.play()
    },
    pause: () => {
      videoRef.current?.pause()
    }
  }))

  return (
    <video 
      ref={videoRef}
      className="w-full max-w-md rounded-lg border shadow-lg"
      width="400"
      controls
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    </video>
  )
})

export default VideoPlayer
