'use client'

import { useRef, useState } from 'react'
import MyForm, { FormHandle } from './formChild'

export default function FormParent() {
  const formRef = useRef<FormHandle>(null)
  const [data, setData] = useState({})

  const resetForm = () => {
    formRef.current?.resetForm()
  }

  const readForm = () => {
    const values = formRef.current?.getValues()
    setData(values ?? {})
  }

  return (
    <div className="p-8 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Form Controls</h2>
      
      <MyForm ref={formRef} />
      
      <div className="space-y-2">
        <button 
          onClick={readForm} 
          className="w-full p-3 bg-blue-500 text-white rounded-lg"
        >
          Read Values
        </button>
        <button 
          onClick={resetForm} 
          className="w-full p-3 bg-red-500 text-white rounded-lg"
        >
          Reset Form
        </button>
      </div>
      
      {Object.keys(data).length > 0 && (
        <div className="p-4 bg-green-100 rounded-lg">
          <strong>Form data:</strong>
          <pre className="mt-2 text-sm">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
