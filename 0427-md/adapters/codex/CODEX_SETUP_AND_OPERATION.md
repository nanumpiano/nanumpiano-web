# CODEX_SETUP_AND_OPERATION.md

- 문서 위치: `/adapters/codex/`
- 문서 성격: Codex 전용 설치·설정·운용 문서
- 작성 기준일: 2026-04-27
- 검증 상태: OpenAI 공식 문서 기준 확인 항목 + 사용자 운용 원칙

---

## 0. 목적

이 문서는 순정 상태의 Codex를 새 폴더에서 바로 작업자로 세우기 위한 adapter 문서다.  
프로젝트 작동 원리는 반복하지 않는다. 작동 원리는 루트의 아래 문서를 읽게 한다.

```text
CONSTITUTION.md
WORK_LOG.md
나눔피아노_전체_설계.md
```

---

## 1. 첫 설치와 기본 확인

공식 문서 기준으로 Codex CLI는 로컬 컴퓨터에서 실행되는 코딩 에이전트다.  
설치와 최신 사용법은 OpenAI 공식 문서를 우선한다.

공식 확인 대상:

- OpenAI Codex CLI docs
- Codex CLI slash commands
- Codex configuration docs
- Codex GitHub repository

---

## 2. 새 폴더에서 복구 절차

### 2-1. 빈 폴더에 이식할 파일

```text
CONSTITUTION.md
WORK_LOG.md
나눔피아노_전체_설계.md
/adapters/codex/CODEX_SETUP_AND_OPERATION.md
```

### 2-2. Codex 첫 지시문

```text
이 프로젝트는 새로 시작하는 것이 아니다.

먼저 아래 문서를 순서대로 읽어라.

1. CONSTITUTION.md
2. WORK_LOG.md
3. 나눔피아노_전체_설계.md
4. adapters/codex/CODEX_SETUP_AND_OPERATION.md

현재 프로젝트가 무엇인지, 어디까지 왔는지, 무엇이 확정되었는지, 지금 당장 무엇을 해야 하는지, 무엇을 하지 말아야 하는지 보고하라.

승인 전에는 파일 수정, 삭제, 이동, 커밋, 배포를 하지 마라.
```

---

## 3. 권한 원칙

Codex는 기본적으로 승인 기반 작업자로 운용한다.

금지:

- 처음부터 Full Access로 방치
- 사용자 승인 없이 삭제
- 사용자 승인 없이 대규모 이동
- 사용자 승인 없이 배포
- 사용자 승인 없이 커밋
- WORK_LOG 작성 없이 완료 선언

허용:

- 읽기 조사
- 파일 목록 조사
- diff 생성
- 테스트 실행
- 사용자 승인 후 수정
- 검증 후 WORK_LOG 기록

---

## 4. Codex 운용 흐름

기본 흐름:

```text
조사
→ 보고
→ 사용자 승인
→ 수정
→ diff
→ 테스트 또는 실행 검증
→ WORK_LOG 맨 위 기록
```

작은 작업은 간단 계획으로 충분하다.  
하지만 아래 작업은 반드시 계획 먼저 한다.

- 문서 통합
- 파일 삭제 또는 이동
- UI 구조 변경
- 빌드 설정 변경
- 배포 설정
- 소스 대규모 리팩터링
- 외부 API 연동
- 권한 변경

---

## 5. Codex 명령 운용 원칙

Codex 공식 문서 기준으로 slash command를 통해 모델, 권한, 상태, 세션 관리 등을 제어할 수 있다.

사용 원칙:

- `/status`: 현재 세션과 사용 상태 확인
- `/permissions`: 권한 상태 확인 및 조정
- `/model`: 작업 성격에 맞는 모델 확인 또는 전환
- `/plan`: 구조 변경 또는 큰 작업 전 계획 작성
- `/review`: 변경 후 자체 검토
- `/clear`: 완전 새 작업 단위로 넘어갈 때 사용
- `/compact`: 맥락을 유지하면서 압축이 필요할 때 사용
- `/fork`: 같은 맥락에서 실험 분기가 필요할 때 사용

주의:

- `/clear`를 무조건 강제하지 않는다.
- 긴 디버깅은 세션을 유지할 수 있다.
- 단, 컨텍스트가 무거워지면 `/compact` 또는 새 세션 이관을 고려한다.
- 기능이 작고 명확하면 `/plan`을 과도하게 쓰지 않는다.
- 구조가 흔들릴 작업이면 `/plan`부터 쓴다.

---

## 6. Codex와 WORK_LOG

Codex 작업 종료 조건:

1. 변경 파일 목록 보고
2. diff 보고
3. 검증 방법 보고
4. 검증 결과 보고
5. 실패와 수정 방법 보고
6. `WORK_LOG.md` 맨 위에 기록 추가

WORK_LOG 항목 제목 예:

```md
## 2026-04-27 19:20 / 작업자: Codex / 작업: 문서 통합 후보 조사
```

---

## 7. Codex에게 금지할 첫 문장

중요 작업 첫 지시는 아래 문장을 포함해야 한다.

```text
지금은 조사 보고 단계다. 승인 전에는 파일을 수정하지 마라.
```

또는:

```text
파일 삭제, 이동, 커밋, 배포는 사용자 승인 전 금지다.
```

---

## 8. 공식 검증 메모

이 문서에서 Codex 관련 기능은 OpenAI 공식 문서로 확인해야 한다.  
블로그나 유튜브 팁은 참고자료일 뿐, 공식 문서 또는 실제 실행 확인 전에는 정본에 넣지 않는다.

확인된 공식 문서 범주:

- Codex CLI
- Slash commands
- Configuration
- Advanced configuration
- GitHub repository
