'use client'

import { useState } from "react"

export default function InitialType(){
    // string
    const [name,setName] = useState('john')
    const [message,setMessage] = useState("hello world!")

    // number
    const [age,setAge] = useState(18)
    const [count,setCount] = useState(0)
    const [price,setPrice] = useState(19.99)

    //boolean
    const [isActive,setIsActive] = useState(true)
    const [isLoading,setIsLoading] = useState(false)

    //array
    const [tags,setTags] = useState(["react","nextjs","typescript"]) // string[]
    const [scores,setScores] = useState([10,20,30,40])  //number[]
    const [users,setUsers] = useState([
        {id: 1, name:"yash"},
        {id: 2, name:"john"},
    ]) // {id:number; name:string; }[]

    //object
    const [user,setUser] = useState({
        name:"john",
        age: 30
    })  //{name:string; age:number}

    const [profile,setProfile] = useState({
        name: "alice",
        email:"alice@example.com",
        age:20,
        isActive: true
    })

    //nested object - complex
    const [settings,setSettings] = useState({
        theme: 'dark',
        freiends: ["alice","john","yash"],
        notification: {
            email: true,
            push: false
        }
    })

    return (
        <div>
            <p>name: {typeof(name)}</p>
            <p>message: {typeof(message)}</p>
            <p>age: {typeof(age)}</p>
            <p>count: {typeof(count)}</p>
            <p>price: {typeof(price)}</p>
            <p>isActive: {typeof(isActive)}</p>
            <p>isLoading: {typeof(isLoading)}</p>
            <p>tags: {typeof(tags)}</p>
            <p>scores: {typeof(scores)}</p>
            <p>users: {typeof(users)}</p>
            <p>user: {typeof(user)}</p>
            <p>profile: {typeof(profile)}</p>
            <p>settings: {typeof(settings)}</p>
        </div>
    )
}
