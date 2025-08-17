"use client";


import {useState} from "react";

export default function LoginForm({onLogin}) {
  const [id, setId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!id.trim()) return;
    onLogin(id);
    setId("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
      type="text"
      placeholder="아이디 입력"
      value={id}
      onChange={(e) => setId(e.target.value)}
      className="flex space-x-2"
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">로그인</button>
    </form>
  )
}