export default function ProfileList({profiles}) {
  return (
    <ul className="mt-4 space-y-2">
      {profiles.map((p, i) => (
        <li key={i} className="border p-2 rounded">
          {p.name} ({p.age}세)
        </li>
      ))}
    </ul>
  )
}