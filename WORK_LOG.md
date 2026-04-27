# WORK_LOG.md

최신 작업을 위에 적는 역순 기록이다.

---

## 2026-04-27 18:34 / 작업자: Codex / 작업: 프리뷰 축소 화면 우하방 치우침 수정 및 재배포

- 작업 목적:
  - 창 크기를 줄였을 때 나눔피아노 프리뷰 화면이 아래와 오른쪽으로 치우쳐 보이는 문제를 빠르게 보정.
  - 오늘 진행한 GitHub, Vercel, 폴더 정리, 화면 보정 작업 기록을 복구.

- 작업 전 기준:
  - 작업 루트: `D:\그래비티프리뷰0423`
  - GitHub remote: `https://github.com/nanumpiano/nanumpiano-web.git`
  - 브랜치: `main`
  - 목표 URL: `https://nanumpiano-web.vercel.app/`

- 근거 자료:
  - 사용자 제보: 화면 크기를 줄이면 프리뷰가 우하방으로 치우침.
  - 실제 원인: `preview/*.html`의 모바일 축소 규칙이 `top:50%; left:50%; translate(-50%,-50%)`로 화면 중앙 재배치됨.

- 변경 파일:
  - `index.html`
  - `preview/step1_v3.html`
  - `preview/step2.html`
  - `preview/editor_flow.html`
  - `preview/reapply_flow.html`
  - `WORK_LOG.md`

- 변경 내용:
  - 네 개 프리뷰의 축소 기준을 `top:0`, `left:50%`, `translateX(-50%)`, `transform-origin: top center`로 변경.
  - 홈페이지 모바일 iframe 높이를 `min(74vh, 620px)`와 `min-height:360px`로 조정.
  - 깨져 있던 `WORK_LOG.md`를 오늘 작업 기록 중심으로 재작성.

- Vercel 처리:
  - 계정: `nanumpiano-5602`
  - 프로젝트: `pianos-projects-8475df03/nanumpiano-web`
  - production deployment URL: `https://nanumpiano-50rb54ldk-pianos-projects-8475df03.vercel.app`
  - alias: `https://nanumpiano-web.vercel.app/`

- 검증 방법:
  - Vercel production 배포 실행.
  - 공개 홈 URL HTTP 응답 확인.
  - `preview/step1_v3.html` HTTP 응답 및 상단 고정 CSS 반영 확인.

- 검증 결과:
  - 홈 URL: `200`
  - Step1 프리뷰 URL: `200`
  - Step1 상단 고정 축소 CSS: 반영됨.

- 실패 목록:
  - 최초 HTTP 확인 중 PowerShell 기본 `$HOME` 변수와 `$home` 변수명이 충돌하여 홈 상태 출력이 누락됨.

- 실패 원인:
  - PowerShell 예약/상수 변수명 사용.

- 수정 방법:
  - `$homeResp` 변수명으로 재실행하여 정상 확인.

- 남은 문제:
  - 사용자가 실제 브라우저에서 축소 화면을 최종 눈검수해야 함.
  - 로컬에 사용자가 다시 붙여 넣은 문서 파일 일부는 untracked 상태로 남아 있음.

- Git 상태:
  - 이 기록 작성 시점에는 화면 보정 파일과 `WORK_LOG.md` 커밋 예정.

---

## 2026-04-27 18:16 / 작업자: Codex / 작업: 웹 배포 자산만 남기도록 폴더 정리

- 작업 목적:
  - 사용자가 지시한 대로 현재 폴더에서 웹 배포에 필요한 자산만 남기고 불필요 파일을 제거.

- 유지한 웹 자산:
  - `.git/`
  - `.vercel/`
  - `.gitignore`
  - `.vercelignore`
  - `vercel.json`
  - `index.html`
  - `assets/nanum-logo-cropped.png`
  - `preview/step1_v3.html`
  - `preview/step2.html`
  - `preview/editor_flow.html`
  - `preview/reapply_flow.html`

- 변경 내용:
  - 배포 대상이 아닌 문서, 스크린샷, 원본 이미지 묶음, 이전 프리뷰, 패키지 산출물 등을 제거.
  - `.vercelignore`에 `*.md`, `adapters/`를 추가해 로컬 문서가 다시 생겨도 Vercel 업로드에서 제외되게 함.

- 검증 결과:
  - 로컬 정적 응답 확인에서 홈, 로고, 네 개 프리뷰 HTML이 모두 응답함.

- 커밋:
  - `3a16660 chore: keep only web deploy assets`
  - `9b1134b chore: exclude local docs from Vercel deploy`

---

## 2026-04-27 17:00 / 작업자: Codex / 작업: 모바일 프리뷰 1차 스케일 보정 및 Vercel 배포

- 작업 목적:
  - 모바일/태블릿 폭에서 프리뷰 화면 비율이 제대로 줄지 않는 문제를 1차 보정.

- 변경 내용:
  - 네 개 프리뷰 HTML에 viewport meta를 추가.
  - 기존 `max-width`와 `max-height`가 함께 걸리던 반응형 조건을 폭 기준 중심으로 조정.
  - `vercel.json`에 `"framework": null`, `"installCommand": ""`를 설정해 정적 HTML 배포로 고정.

- 검증 결과:
  - GitHub push 성공.
  - Vercel production 배포 성공.
  - 목표 URL `https://nanumpiano-web.vercel.app/` 접속 확인.

- 커밋:
  - `0e62340 fix: improve mobile preview scaling`
  - `bfd8940 docs: update deployment log URL`

---

## 2026-04-27 16:48 / 작업자: Codex / 작업: GitHub remote 정정, 원격 백업, 최초 production 배포

- 작업 목적:
  - 현재 `D:\그래비티프리뷰0423` 폴더 기준 결과물을 GitHub `nanumpiano/nanumpiano-web`와 Vercel production에 반영.

- Git 처리:
  - remote를 `https://github.com/nanumpiano/nanumpiano-web.git`로 정정.
  - 기존 `origin/main` 이력이 현재 로컬 기준과 달라 원격 백업 브랜치 생성.
  - 백업 브랜치: `backup/remote-main-before-20260427-1648`
  - 사용자 승인 후 `git push --force-with-lease origin main` 실행.

- Vercel 처리:
  - Vercel CLI 확인 및 로그인 계정 확인: `nanumpiano-5602`
  - 프로젝트 연결: `nanumpiano-web`
  - production alias: `https://nanumpiano-web.vercel.app/`

- 커밋:
  - `0bd2180 chore: prepare nanumpiano web for deployment`
  - `7feaebb chore: record Vercel deployment update`

- 남은 문제로 이어진 항목:
  - 이후 사용자 검수에서 축소 화면 프리뷰 치우침 문제가 보고되어 18:34 작업으로 보정.
