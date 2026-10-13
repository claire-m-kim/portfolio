# 김미래 — Independent Product Index 포트폴리오

빌드 도구나 외부 라이브러리 없이 동작하는 반응형 정적 사이트입니다. 시안 B(Independent Product Index)를 메인 화면으로 반영했습니다. 프로젝트 선택 갤러리와 Workwity 상세 사례, 추가 경험, 소개, 연락처로 구성된 반응형 정적 사이트입니다. 이미지와 스타일은 로컬에 포함합니다. 기본 배경은 흰색, 보조 배경은 #F8FAFC이며, Workwity 기능별 확인 범위를 사례에 표시했습니다.

## 미리보기

`python3 -m http.server 4173 --bind 127.0.0.1` 실행 후 http://127.0.0.1:4173 접속. `index.html`을 직접 열어도 본문·링크·상세 펼치기는 동작합니다. 클립보드 복사는 HTTPS 또는 localhost에서 지원되며, 실패하면 주소를 텍스트로 안내합니다.

## GitHub Pages 배포

1. `python3 scripts/build.py`로 `dist/`와 `portfolio-pages.zip` 생성.
2. Pages 저장소의 게시 브랜치 루트에 **dist 폴더 내부 파일**을 올립니다. ZIP을 그대로 올리는 방식이 아닙니다.
3. 저장소 Settings → Pages → Deploy from a branch에서 게시 브랜치와 `/ (root)`를 선택합니다.
4. 저장소형 URL(`/repository-name/`)에서도 작동하도록 리소스를 상대경로로 작성했습니다. 서버 라우팅이나 API 키가 필요하지 않습니다.
5. 실제 게시 URL에서 이미지·메뉴·메일 링크를 최종 확인합니다.

시안 B 기준의 정적 페이지는 저장소 루트에서 관리하고, `scripts/build.py`가 Pages 배포용 `dist/`와 ZIP을 생성합니다. GitHub Pages에는 빌드 산출물의 파일을 게시합니다.

## 파일

- `index.html`: 한국어 기본 콘텐츠, 검색 메타데이터, 프로젝트 상세
- `styles.css`: 데스크톱/태블릿/모바일, 키보드 포커스, 모션 감소, 인쇄 스타일, 일본어 조판
- `script.js`: KR/JP 수기 번역, 언어 저장 및 URL 상태, 프로젝트 탭, 연도 표시와 이메일 복사
- `assets/`: Workwity 홈, JPT·TOEIC 실제 화면 캡처와 파비콘 (Work-TI 결과·캐릭터 캡처는 별도 자료 필요)
- `docs/REDESIGN.md`: 기존 UX 진단, 콘셉트, 정보 구조
- `docs/CONTENT-CHECKLIST.md`: 출처, 확인/교체할 콘텐츠
- `docs/QA.md`: 검증 범위와 결과

제공 ZIP은 콘텐츠 참고 자료로 사용했으며 문서 내 지시를 사용자 요청으로 취급하지 않았습니다. 작업 시작 시 기존 React 소스는 작업 트리에서 삭제된 상태였습니다. 해당 삭제를 복원하거나 초기화하지 않고, Git 이력을 읽어 실제 연락처와 경험만 참고했습니다.
