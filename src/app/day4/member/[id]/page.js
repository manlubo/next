import Greeting from "@/components/day4/Greeting";
import {members} from "@/data/members";

export default function Page({params}) {
  const memberId = params.id / 1;
  const member = members.find(m => m.id === memberId);

  if(!member) {
    return <p className="p-6">해당 회원을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">멤버 정보  페이지</h1>
      <Greeting {...member}/>
    </div>
  )
}