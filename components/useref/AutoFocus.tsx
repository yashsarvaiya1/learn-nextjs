'use client'

import { useEffect, useRef } from "react"

export default function AutoFocus(){
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[])

    return (
        <div className="p-4">
            <input type="text" ref={inputRef} placeholder="auto-focused" />
        </div>
    )
}
