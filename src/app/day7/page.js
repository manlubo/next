"use client";

import {useState} from "react";
import UserProfile from "@/components/day7/UserProfile";
import LoginForm from "@/components/day7/LoginForm";

export default function Page(){
  const [user, setUser] = useState(null);

  function handleLogin(id){
    setUser(id);
  }

  function handleLogout(){
    setUser(null);
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Day 7 - 조건부 렌더링 예제</h1>
      {user ? (<UserProfile user={user} onLogout={handleLogout}/>) : (<LoginForm onLogin={handleLogin}/>)}
    </div>
  )
}