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

### [동적 라우팅 정리]

- App Router에서 폴더 이름을 대괄호로 감싸면 URL 파라미터로 인식됨
   - `src/app/day/[id]/page.js` → `/day/1`, `/day/2` 등에서 `params.id`로 값 전달
   - `src/app/member/[id]/page.js` → `/member/1`, `/member/winte` 등에서 `params.id`로 값 전달

- 기본 동작
   - 폴더 구조가 곧 라우팅 규칙
   - `[id]` 위치에 들어오는 문자열이 자동으로 `params.id`에 매핑됨
   - 같은 상위 폴더에 `layout.js`가 있으면, 경로 전환 시 공통 레이아웃은 유지되고 자식 페이지만 교체 렌더링

- 샘플 경로와 매핑 예
   - `/day/3`  → `params.id = "3"`
   - `/member/42` → `params.id = "42"`

- 확인 포인트
   - 파일 경로: `src/app/<segment>/[id]/page.js`
   - 컴포넌트 시그니처: `export default function Page({ params }) { ... }`
   - 값 접근: `params.id`

- axios.get("url?param=${param}") 형태로 `route.js`에 요청을 보낸 후 파라미터에 따른 결과 받아와서 렌더링

### [Props + 동적 라우팅 연계]
- 데이터는 src/data에 모듈화하여 정적/동적 페이지에서 공용 사용
- 정적 페이지에서는 배열 데이터를 .map()으로 반복 렌더링
- 동적 페이지(member/[id])에서는 params.id로 해당 데이터 조회 후 props 전달

### [State 개념]
- 컴포넌트 내부에서 관리하는 값
- useState Hook으로 선언
- setState 호출 시 컴포넌트가 다시 렌더링됨

### [Props와의 차이]
- props: 부모 → 자식으로 전달
- state: 컴포넌트 내부에서 직접 관리

### [폼 입력값 관리]
- input의 value와 onChange를 state와 연결
- 여러 개 입력값을 각각 또는 객체 state로 관리

### [부모 → 자식 함수 전달 (onSave)]
- 부모에서 함수를 정의해 props로 전달
- 자식이 onSave(데이터) 호출 → 부모 state 업데이트

### [배열 state 업데이트]
- 불변성 유지: 기존 배열을 직접 수정하지 않음
- 스프레드 연산자(...)로 새 배열을 만들어 교체
- 예: setProfiles([...profiles, profile])

### [실행 흐름]
- 사용자가 Form 입력 → 저장 클릭
- 자식이 onSave 호출 → 부모 state 업데이트
- 부모가 새로운 배열로 교체 → 리스트 다시 렌더링
