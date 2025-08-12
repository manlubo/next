export default function Card({title, children, right}) {
  return (
    <section className="rounded-xl border border-gray-200  p-4 bg-white ">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {right}
      </div>
      <div className="text-sm text-gray-700 ">{children}</div>
    </section>
  )
}