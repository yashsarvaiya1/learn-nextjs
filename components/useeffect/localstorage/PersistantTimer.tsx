'use client'

import { useEffect, useState } from "react"

export default function PersistantTimer(){
    const [count,setCount] = useState<number>(0)
    const [input,setInput] = useState<number>(0)

    useEffect(()=>{
        const stored = localStorage.getItem('count')
        const parsed = stored ? Number(stored) : 0

        if(parsed>0){
            setCount(parsed)
            setInput(parsed)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('count',String(count))
    },[count])

    useEffect(()=>{
        setCount(input)
    },[input])

    useEffect(()=>{
        if(count<=0) return
        const interval = setInterval(()=>{
            setCount(p=>p-1)
        },1000)
        return () => clearInterval(interval)
    },[count])

    return(
        <div>
            <p>Timer : {count}</p>

            <input type="number" value={count} onChange={(e)=>{setInput(Number(e.target.value))}} />

            <button onClick={()=>setInput(count+10)}>+10 seconds</button>
        </div>
    )
}
