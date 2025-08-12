export default function Badge({color = "blue", children}) {
  const colorMap = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    gray: "bg-gray-600",
  };

  const base = "inline-flex items-center px-2 py-1 text-xs font-medium rounded text-white";
  return (
    <span className={`${base} ${colorMap[color] || colorMap.green}`}>{children}</span>
  )
}