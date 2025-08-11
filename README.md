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
4. app 하위 `api/ping/route.js` 생성