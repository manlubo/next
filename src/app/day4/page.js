import {members} from "@/data/members";
import Greeting from "@/components/day4/Greeting";

export default function Page(){
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Day 4 - Props + Static Data</h1>
      {members.map(m => (
        <Greeting key={m.id} {...m} />
      ))}
    </div>
  )
}