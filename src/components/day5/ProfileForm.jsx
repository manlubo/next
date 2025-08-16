"use client";

import {useState} from "react";

export default function ProfileForm({onSave}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSave({name, age});
    setName("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input type="text" placeholder="이름" className="border p-2 w-full rounded" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="나이" className="border p-2 w-full rounded" value={age} onChange={(e) => setAge(e.target.value)} />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">저장</button>
    </form>
  )


}