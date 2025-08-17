"use client";

import TodoForm from "@/components/day6/TodoForm";
import {useState} from "react";
import TodoList from "@/components/day6/TodoList";

export default function Day6(){
  const [todos, setTodos] = useState([]);

  function handleAdd(task) {
    setTodos([...todos, task]);
  }

  function handleRemove(index) {
    setTodos(todos.filter((_, i)  => i !== index));
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Day 6 - 이벤트 처리 예제</h1>
      <TodoForm onAdd={handleAdd}/>
      <TodoList todos={todos} onRemove={handleRemove}/>
    </div>
  )
}