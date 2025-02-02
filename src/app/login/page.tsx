"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    });

    

    const onLoginingIn = async()=>{
        
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center p-6  shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Login </h1>
              
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
                    <div className="text-center">
                    <button onClick={onLoginingIn} className="bg-gray-500 hover:bg-gray-700 p-3 w-32">Login</button>
                    </div>
                    <Link href='/signup'>Sign Up if you don't have and account?</Link>
                </div>
            </div>
        </div>
    );
}
