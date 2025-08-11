import Counter from "@/components/Counter";

export default function Page() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Next.js + Tailwind + App Router ✅</h1>
      <p className="mt-2 text-gray-700">src 구조와 @ alias도 적용 완료.</p>
      <Counter />
    </main>
  );
}
