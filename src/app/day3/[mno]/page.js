import axios from "axios";

export default async function Page({params}){
  // const mno = await params.mno;
  const {mno} = await params;
  const res = await axios.get("http://localhost:3001/api/ping")
  const res1 = await axios.get(`http://localhost:3001/api/user?mno=${mno}`);

  return (
    <main>
      <h1>Day {mno}페이지</h1>
      <h2>{res.data.ts}</h2>
      <h2>{res.data.name}님 안녕하세요.</h2>
      <h2>이름: {res1.data.name}</h2>
      <h2>나이: {res1.data.age}</h2>
      <h2>성별: {res1.data.gender}</h2>
      <h2>전화번호: {res1.data.tel}</h2>
      <p>이 페이지는 동적 라우팅으로 생성되었습니다.</p>
    </main>
  )
}