"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const router = useRouter();

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/signup", user);
            console.log("Signup successful", response.data);
            router.push("/login"); // Redirect to login page after signup
        } catch (error) {
            console.error("Signup failed", error);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSignup();
                }}
            >
                <input
                    type="text"
                    placeholder="Username"
                    value={user.username}
                    onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                    }
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}
