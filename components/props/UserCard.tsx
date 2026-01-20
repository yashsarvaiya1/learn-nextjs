'use client'

interface UserCardProps{
    name: string,
    age: number,
    email: string,
}

export default function UserCard({name,age,email}:UserCardProps){
    return (
        <div className="border p-4 mb-2">
            <h3>Name: {name}</h3>
            <p> Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )
}
