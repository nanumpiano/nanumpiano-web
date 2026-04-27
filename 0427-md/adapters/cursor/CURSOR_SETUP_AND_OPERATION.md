# CURSOR_SETUP_AND_OPERATION.md

- 문서 위치: `/adapters/cursor/`
- 문서 성격: Cursor 전용 설정·운용 문서
- 작성 기준일: 2026-04-27
- 검증 상태: Cursor 공식 Rules 문서 기준 확인 항목 + 사용자 운용 원칙

---

## 0. 목적

이 문서는 Cursor를 사용해 나눔피아노 작업을 이어받기 위한 adapter 문서다.  
프로젝트 작동 원리는 반복하지 않는다. Cursor 작업자는 먼저 아래 문서를 읽는다.

```text
CONSTITUTION.md
WORK_LOG.md
나눔피아노_전체_설계.md
```

---

## 1. Cursor 규칙 구조

Cursor 공식 문서 기준으로 Rules는 Agent에게 지속적인 지침을 제공하는 기능이다.  
Project Rules, User Rules, Team Rules, AGENTS.md를 상황에 맞게 사용할 수 있다.

원칙:

- 프로젝트 공통 복구 지침은 루트 3대 문서에 둔다.
- Cursor 전용 반복 지침은 `.cursor/rules`에 둔다.
- Cross-tool 공통 지침이 필요하면 `AGENTS.md`를 얇게 둘 수 있다.
- Cursor 전용 세부 규칙과 공통 문서를 섞지 않는다.

---

## 2. 새 폴더에서 복구 절차

### 2-1. 빈 폴더에 이식할 파일

```text
CONSTITUTION.md
WORK_LOG.md
나눔피아노_전체_설계.md
/adapters/cursor/CURSOR_SETUP_AND_OPERATION.md
```

필요 시:

```text
.cursor/rules/
AGENTS.md
```

### 2-2. Cursor 첫 지시문

```text
이 프로젝트는 새로 시작하는 것이 아니다.

CONSTITUTION.md, WORK_LOG.md, 나눔피아노_전체_설계.md를 먼저 읽고 현재 상태를 복구하라.
그 다음 Cursor 설정과 rules 상태를 확인하라.
승인 전에는 파일 수정, 삭제, 이동, 커밋, 배포를 하지 마라.
```

---

## 3. Cursor 운용 원칙

Cursor는 편집기와 결합되어 빠르게 수정하기 좋다.  
그만큼 무심코 많은 파일을 바꾸는 위험도 있다.

기본 흐름:

```text
현재 파일 확인
→ 관련 문서 읽기
→ 작업 범위 보고
→ 사용자 승인
→ 수정
→ diff 확인
→ 브라우저 또는 테스트 검증
→ WORK_LOG 맨 위 기록
```

---

## 4. Cursor Rules 작성 원칙

Rules에는 아래만 둔다.

- 3대 문서를 먼저 읽으라는 지시
- WORK_LOG 최신순 기록 원칙
- 승인 전 삭제·이동·커밋 금지
- 나눔피아노 Step 1 / Step 2 / Editor / 재적용 혼동 금지
- 검증 없는 완료 금지

Rules에 제품 설계 전체를 복사하지 않는다.  
제품 설계는 `나눔피아노_전체_설계.md`를 참조한다.

---

## 5. Cursor 작업 완료 조건

작업 완료 전 확인:

1. diff 확인
2. 변경 파일 목록 확인
3. 브라우저 또는 테스트 검증
4. 사용자 요구 범위 안에서 끝났는지 확인
5. WORK_LOG 맨 위에 기록
6. 필요 시 커밋 전 사용자 승인

---

## 6. 공식 검증 메모

Cursor Rules 관련 내용은 Cursor 공식 문서를 우선한다.  
커뮤니티 예시는 참고로만 사용한다.
