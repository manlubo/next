# Next.js

---
### [프로젝트 생성]
1. 새 프로젝트 > React > 프로젝트타입 : Next.js
2. 프롬프트 선택
   - TypeScript(타입 스크립트로 만들것인지 여부) - No
   - ESLint?(코드 문법검사, 스타일 규칙 적용 여부) - Yes
   - Tailwind CSS(테일윈드를 ui프레임워크로 사용여부) - Yes
   - src / directory(코드를 src 폴더안에 넣을 것인지) - Yes
   - App Router(Next.js 최신 라우팅 app/ 구조 사용여부) - Yes
   - customize import alias(import 별칭 기본값에서 변경 여부 기본값 : @/*) - No
   - Turbopack for next dev?(번들러를 Turbopack 사용) - Yes
3. src 하위 `components`, `lib` 디렉토리 생성
4. app 하위 `api/ping/route.js` 생성 - 백엔드 역할
<details>
<summary>route.js</summary>

```js
export async function GET() {
   return new Response(JSON.stringify({ ok: true, ts: Date.now() }), {
   headers: { "Content-Type": "application/json" },
   });
}
```
</details>

### [Counter.jsx]
- useState를 사용해 숫자 상태값 관리
- 증가/감소 버튼 클릭 시 상태 변경
- 버튼 스타일은 Tailwind CSS로 적용

### [페이지 라우팅]
- app/day1/page.js → /day1 URL 연결
- app/day2/page.js → /day2 URL 연결
- Link 컴포넌트로 페이지 이동 (next/link)

### [Badge.jsx]
- color와 children을 props로 받아 렌더링
- color에 따라 className 동적 변경
- 공통 스타일과 색상별 스타일을 분리해 재사용성 높임

### [Card.jsx]
- 제목, 우측요소 props로 받아 표시
- children을 지원해 카드 안에 추가 요소 배치 가능

### [ProductCard.jsx]
- 상품 이름, 가격 표시, 태그 표시
- props로 받은 데이터를 기반으로 렌더링