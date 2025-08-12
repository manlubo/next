export default function ProductCard({ name, price, tags = [] }) {
  return (
    <div className="rounded-xl border border-gray-200  p-4">
      <div className="text-base font-semibold">{name}</div>
      <div className="mt-1 text-sm text-gray-600 ">{price.toLocaleString()}원</div>
      <div className="mt-3 flex gap-2 flex-wrap">
        {tags.map((t, i) => (
          <span key={i} className="px-2 py-0.5 text-xs rounded bg-gray-100  text-gray-700 ">
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
}
