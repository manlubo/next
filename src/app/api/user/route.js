const user = [
  {name:"전상현", age:20, gender:"male", tel: "010-6687-8628"},
  {name:"카리나", age:22, gender:"female", tel: "010-6687-3333"},
  {name:"윈터", age:22, gender:"female", tel: "010-6687-2222"}
]

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const num = searchParams.get('mno');
  return new Response(JSON.stringify(user[num - 1]), {
    headers: { "Content-Type": "application/json" },
  });
}
