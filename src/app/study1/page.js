"use client";

import {useState} from "react";
import PostForm from "@/components/study1/PostForm";
import PostList from "@/components/study1/PostList";

export default function Page(){
  const [boards, setBoards] = useState([]);

  function handleAdd(board){
    setBoards([...boards, board]);
  }

  function handleRemove(target){
    setBoards(boards.filter((_, i) => i !== target));
  }

  return (
    <div>
      <h1>문제 풀이 1</h1>
      <PostForm onAdd={handleAdd}/>
      <PostList boards={boards} onRemove={handleRemove}/>
    </div>
  )
}