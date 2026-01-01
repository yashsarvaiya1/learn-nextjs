'use client'

import { useState } from "react"

export default function BmiComponent(){
    const [height,setHeight] = useState(175)
    const [weight,setWeight] = useState(60)

    const bmi = weight /( (height / 100) ** 2)

    const minIdealWeight = 18.5 * ((height / 100) ** 2)
    const maxIdealWeight = 24.9 * ((height / 100) ** 2)

    let category = ''
    if(bmi<=18.5) category="underweight"
    else if(bmi < 24.9) category="Normal"
    else if(bmi < 29.9) category="Overweight"
    else category="obese"

    return (
        <div className="text-xl space-y-4">
            <div>
                <label>Height: </label>
                <input className="border" type="number" value={height} onChange={(e)=> {setHeight(Number(e.target.value))}} />
                <br />
                <label>Weight: </label>
                <input className="border" type="number" value={weight} onChange={(e)=>{setWeight(Number(e.target.value))}}/>
            </div>
            <div>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>BMI: {bmi}</p>
                <p>Category: {category}</p>
                <p>Ideal Range: {minIdealWeight.toFixed(2)} - {maxIdealWeight.toFixed(2)}</p>
            </div>
        </div>
    )
 }
