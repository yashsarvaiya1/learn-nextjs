'use client'
import { useState } from "react";
import { Button } from '@/components/ui/button'

export default function ToggleExample(){
    const [isvisible,setIsvisible] = useState(false)

    return (
        <div className="space-y-4">
            <Button onClick={()=> setIsvisible(!isvisible)}>{isvisible ? 'Hide' : 'Show'} Text</Button>
            {isvisible && (
                <p className="text-lg bg-blue-100 p-4 rounded">Hello! i am Visible now!</p>
            )}
        </div>
    )
} 
