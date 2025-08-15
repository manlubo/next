import Link from "next/link";

export default function Greeting({id, name, age, hobby}) {
  return (
    <Link href={`/day4/member/${id}`}>
      <div className="border p-4 rounded-lg mb-2">
        <h2 className="font-bold text-lg">안녕, {name.trim() || "손님"}!</h2>
        {age && <p>나이: {age}살</p>}
        {hobby && <p>취미는 {hobby}야.</p>}
      </div>
    </Link>
  )
}