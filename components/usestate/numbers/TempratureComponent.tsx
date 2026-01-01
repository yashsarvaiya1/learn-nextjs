'use client'

import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function TemperatureComponent(){
    const [celsius, setCelsius] = useState(0)
    
    const fahrenheit = (celsius * 9/5) + 32
    const kelvin = celsius + 273.15

    const ftoc = (f: number) => {
        setCelsius((f - 32) * 5/9)
    }

    const ktoc = (k: number) => {
        setCelsius(k - 273.15)
    }

    let category = ''
    if (celsius < 0) category = 'Very Cold ❄️'
    else if (celsius < 16) category = 'Cold 🥶'
    else if (celsius < 26) category = 'Moderate 😊'
    else if (celsius < 36) category = 'Hot 🔥'
    else category = 'Very Hot 🥵'

    return(
        <div className="space-y-4">
            <div>
                <label className="block font-bold">Celsius: </label>
                <Input 
                    type="number" 
                    value={celsius}
                    onChange={(e) => setCelsius(Number(e.target.value))} 
                />

                <label className="block font-bold">Fahrenheit: </label>
                <Input 
                    type="number" 
                    value={fahrenheit}
                    onChange={(e) => ftoc(Number(e.target.value))} 
                />

                <label className="block font-bold">Kelvin: </label>
                <Input 
                    type="number" 
                    value={kelvin}
                    onChange={(e) => ktoc(Number(e.target.value))} 
                />
            </div>
            
            <div className="flex mt-10 gap-5">
                <button onClick={() => setCelsius(0)}>Freezing</button>
                <button onClick={() => setCelsius(25)}>Room Temperature</button>
                <button onClick={() => setCelsius(100)}>Boiling</button>
            </div>

            {/* ✅ Format ONLY in display (not in inputs!) */}
            <div className="flex-col gap-5 mt-10 border-t-5">
                <p>Fahrenheit: {fahrenheit.toFixed(2)}°F</p>
                <p>Celsius: {celsius.toFixed(2)}°C</p>
                <p>Kelvin: {kelvin.toFixed(2)}K</p>
                <p className="p-2 text-lg font-black">Category: {category}</p>
            </div>
        </div>
    )
}
