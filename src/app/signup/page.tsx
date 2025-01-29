"use client"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function SignupPage(){
    const [user,setUser] = useState({
        email:"",
        username:"",
        password:"",
    })
    const onSignUp = async ()=>{

    }

    return(
        <div>
            <h1>Sign up</h1>
            <hr />
            <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />

<label htmlFor="username">username</label>
            <input type="text" name="username" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />

<label htmlFor="username">username</label>
            <input type="text" name="username" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />
            </div>
        </div>
    )
}