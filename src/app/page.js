import Link from "next/link";

const DAYS = Array.from({ length: 30 }, (_, i) => {
  const n = i + 1;
  return { slug: `day${n}`, title: `Day ${n}` };
});

export default function Page() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">30일 로드맵</h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {DAYS.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/${d.slug}`}
              className="block rounded-xl border border-gray-200 p-4 hover:shadow-sm hover:border-blue-500"
            >
              <div className="text-lg font-semibold">{d.title}</div>
              <div className="text-sm text-gray-500">{`/${d.slug}`}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
