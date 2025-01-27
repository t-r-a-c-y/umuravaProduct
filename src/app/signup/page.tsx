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
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} />
        </div>
    )
}