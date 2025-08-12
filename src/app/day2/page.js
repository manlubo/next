import Badge from "@/components/day2/Badge";
import Card from "@/components/day2/Card";
import ProductCard from "@/components/day2/ProductCard";

const products = [
  { name: "기계식 키보드", price: 129000, tags: ["핫스왑", "적축"] },
  { name: "인체공학 마우스", price: 79000, tags: ["블루투스", "저소음"] },
];

export default function Page() {
  return (
    <main className="min-h-screen p-10 bg-white text-black ">
      <h1 className="text-3xl font-bold">Day 2: JSX & 컴포넌트</h1>

      <div className="mt-6 space-y-4">
        <Card title="상태 배지 예시" right={<Badge color="green">ACTIVE</Badge>}>
          children로 본문이 들어오고, 오른쪽에는 별도 엘리먼트를 넘겨받아 렌더링(right prop).
        </Card>

        <Card title="상품 목록">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map(p => <ProductCard key={p.name} {...p} />)}
          </div>
        </Card>
      </div>
    </main>
  );
}
