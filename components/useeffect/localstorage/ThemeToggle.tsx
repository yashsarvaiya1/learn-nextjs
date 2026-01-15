'use client'

import { useEffect, useState } from "react"

export default function ThemeToggle(){
    const [theme,setTheme] = useState<"light" | "dark">('light')

    useEffect(()=>{
        const stored = localStorage.getItem('theme')
        if(stored === 'light' || stored === 'dark'){
            setTheme(stored)
        }  
    },[])

    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])

    return (
        <div className={`${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'} h-screen`}>
            <p>Theme: {theme}</p>

            <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>Change to {theme === 'dark' ? "Light" : "Dark"} Theme</button>
        </div>
    )
}
