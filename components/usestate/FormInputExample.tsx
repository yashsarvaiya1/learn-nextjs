'use client'

import { useState } from "react"
import { Input } from "../ui/input"

export default function FormInputExample() {
    const [name,setName] = useState('')

    return (
        <div className="space-y-4">
            <Input type="text" placeholder="Type your name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <p className="text-lg"> Hello, <strong>{name || 'stranger'}</strong>!</p>
        </div>
    )
}
