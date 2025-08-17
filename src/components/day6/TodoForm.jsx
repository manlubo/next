"use client";

import {useState} from "react";

export default function TodoForm({onAdd}) {
  const [task, setTask] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    if(!task.trim()) return;
    onAdd(task);
    setTask("");
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input type="text" placeholder="할 일 입력" value={task} onChange={e => setTask(e.target.value)} className="border p-2 flex-1 rounded"/>
      <button type="submmit" className="px-4 py-2 bg-blue-500 text-white rounded">추가</button>
    </form>
  )
  
}