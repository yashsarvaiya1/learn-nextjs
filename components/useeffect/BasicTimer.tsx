'use client'

import { useEffect, useState } from "react"

export default function BasicTimer(){
    const [firstCount,setFirstCount] = useState(0)
    const [secondCount,setSecondCount] = useState(0)
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setFirstCount(p=>p+1)
        },2000)

        const secondInterva = setInterval(() => {
            setSecondCount(p=>p+1)
        }, 1000);

        return () => clearInterval(timer)
    },[])

    return(
        <div>
            <h2>Timer : {firstCount} will change every 2 seconds.</h2>
            <h2>Timer : {secondCount} will change every 1 seconds.</h2>
        </div>
    )
}
