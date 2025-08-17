"use client";
import {useState} from "react";

export default function PostForm({onAdd}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(!title.trim() || !content.trim()) return;
    onAdd({title, content});
    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title} />
      <input type="text" placeholder="Content" onChange={e => setContent(e.target.value)} value={content} />
      <button>Submit</button>
    </form>
  )
}