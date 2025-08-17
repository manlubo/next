"use client";

import {useState} from "react";

export default function PostList({boards, onRemove}) {
  const [openIdx, setOpenIdx] = useState(null);
  function handleOpenIdx(i) {
    setOpenIdx(openIdx === i ? null : i);
  }

  return (
    <ul>
      {boards.map((b, i) => (
       <li key={i}>
         <p onClick={_ => handleOpenIdx(i)}>{b.title}</p>
         {openIdx === i && <p>{b.content}</p>}
         <button onClick={() => onRemove(i)}>삭제</button>
       </li>
      ))}
    </ul>
  )
}