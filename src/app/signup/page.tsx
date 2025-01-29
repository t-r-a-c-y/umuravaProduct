"use client"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function SignupPage() {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    });
    const [isSigningUp,setIsSigningUp] = useState(false);

    const toLoging = ()=>{
        if(user.email >0 && user.username >0 && user.password>0){
            setIsSigningUp(true)
        }else{
            setIsSigningUp(false);
        }
    }

    const onSignUp = ()=>{

    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center p-6  shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Sign up</h1>
              
                <div className="flex flex-col gap-4 px-20 item-center">
                    <label htmlFor="username">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Enter your email"
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
                    />
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="Enter your username"
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
                    />
                    <label htmlFor="username">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Enter your password"
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
                    />
                    <button onClick={onSignUp} className="bg-gray-500 hover:bg-gray-700 p-3 w-32">Sign Up</button>
                    <Link href='/login'>Already have an account? Click on the login page</Link>
                </div>
            </div>
        </div>
    );
}
