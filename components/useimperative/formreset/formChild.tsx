'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'

export interface FormHandle {
  resetForm: () => void
  getValues: () => { name: string; email: string }
}

const MyForm = forwardRef<FormHandle>((props, ref) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    resetForm: () => {
      nameRef.current!.value = ''
      emailRef.current!.value = ''
    },
    getValues: () => {
      return {
        name: nameRef.current!.value,
        email: emailRef.current!.value
      }
    }
  }))

  return (
    <div className="space-y-3 p-4 border rounded-lg bg-gray-50">
      <input 
        ref={nameRef} 
        className="p-3 border rounded w-full" 
        placeholder="Name" 
      />
      <input 
        ref={emailRef} 
        className="p-3 border rounded w-full" 
        placeholder="Email" 
      />
    </div>
  )
})

export default MyForm
