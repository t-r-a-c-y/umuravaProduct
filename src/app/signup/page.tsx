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

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center p-6  shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Sign up</h1>
                <hr className="mb-4" />
                <div className="flex flex-col gap-4">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
                    />
                </div>
            </div>
        </div>
    );
}
