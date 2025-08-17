export default function  UserProfile({user, onLogout}) {
  return (
    <div className="border p-4 rounded-lg flex justify-between items-center">
      <span className="font-semibold">{user}님 환영합니다!</span>
      <button onClick={onLogout} className="px-3 py-1 bg-red-500 text-white rounded">로그아웃</button>
    </div>
  )
}