export default function TodoList({todos, onRemove}){
  return (
    <ul className="mt-4 space-y-2">
      {todos.map((t, i) => (
        <li key={i} className="flex justify-between items-center border p-2 rounded">
          <span>{t}</span>
          <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => onRemove(i)}>삭제</button>
        </li>
      ))}
    </ul>
  )
}