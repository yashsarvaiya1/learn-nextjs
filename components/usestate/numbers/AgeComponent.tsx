'use client'
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function AgeComponent(){
    const [age,setAge] = useState(17)

    const status = age>=18 ? 'adult' : 'minor'

    let agegroup = ''
    if(age <= 12) agegroup = 'Child'
    else if (age<= 17) agegroup = 'Teen'
    else if (age <= 64) agegroup = 'Adult'
    else agegroup = 'Senior'

    return(
        <div className="flex-col gap-4">
            <div className="flex-col gap-2">
                <Input type="number" value={age} onChange={(e)=> setAge(Number(e.target.value))}/>
                <p>
                    Age: {age}
                </p>
                <p>
                    Status: {status}
                </p>
                <p>
                    Age-Group: {agegroup}
                </p>
                {status === 'adult' && <p> Only Adult will be able to see this message</p>}
            </div>
            <div className="flex gap-4">
                <button onClick={()=>setAge(a=>a+1)}>year + 1</button>
                <button onClick={()=> {if(age>1) setAge(a=>a-1)}}>year - 1</button>
            </div>
        </div>
    )
}
