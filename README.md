# 김미래 — Independent Product Index 포트폴리오

빌드 도구나 외부 라이브러리 없이 동작하는 반응형 정적 사이트입니다. 시안 B(Independent Product Index)를 메인 화면으로 반영했습니다. 프로젝트 선택 갤러리와 Workwity 상세 사례, 추가 경험, 소개, 연락처로 구성된 반응형 정적 사이트입니다. 이미지와 스타일은 로컬에 포함합니다. 기본 배경은 흰색, 보조 배경은 #F8FAFC이며, Workwity 기능별 확인 범위를 사례에 표시했습니다.

## 미리보기

`python3 -m http.server 4173 --bind 127.0.0.1` 실행 후 http://127.0.0.1:4173 접속. `index.html`을 직접 열어도 본문·링크·상세 펼치기는 동작합니다. 문의 발송은 Vercel 서버 함수와 메일 서비스 설정 후에만 활성화됩니다.

## GitHub Pages 배포

1. `python3 scripts/build.py`로 `dist/`와 `portfolio-pages.zip` 생성.
2. Pages 저장소의 게시 브랜치 루트에 **dist 폴더 내부 파일**을 올립니다. ZIP을 그대로 올리는 방식이 아닙니다.
3. 저장소 Settings → Pages → Deploy from a branch에서 게시 브랜치와 `/ (root)`를 선택합니다.
4. 저장소형 URL(`/repository-name/`)에서도 작동하도록 정적 리소스는 상대경로로 작성했습니다. GitHub Pages는 서버 함수를 실행하지 않으므로 문의 전송 API는 별도 서버가 필요합니다.
5. 실제 게시 URL에서 이미지·메뉴를 확인합니다. 문의 전송은 Vercel 서버 설정 후 별도로 확인합니다.

시안 B 기준의 정적 페이지는 저장소 루트에서 관리하고, `scripts/build.py`가 Pages 배포용 `dist/`와 ZIP을 생성합니다. GitHub Pages에는 빌드 산출물의 파일을 게시합니다.

## 문의 전송 설정

문의 폼의 서버 측 처리는 `api/contact.js`가 담당하며 Resend REST API를 사용합니다. 실제 전송을 켜려면 프로젝트를 Vercel에서 제공하고 다음 환경 변수를 Vercel 서버 설정에 등록해야 합니다.

- `RESEND_API_KEY`: Resend의 비밀 API 키
- `CONTACT_TO_EMAIL`: 문의를 받을 주소
- `CONTACT_FROM_EMAIL`: Resend에서 인증한 발신 도메인 주소
- `CONTACT_SITE_ORIGIN`: 폼을 제공하는 정확한 사이트 origin

실제 값은 소스나 `NEXT_PUBLIC_` 같은 클라이언트 공개 변수에 넣지 않습니다. 발신 도메인 인증과 서비스 계정 설정이 끝나기 전에는 폼이 전송 성공으로 표시되지 않습니다. GitHub Pages 정적 배포에서는 `/api/contact`가 실행되지 않아 폼이 실패 안내를 표시합니다.

## 파일

- `index.html`: 한국어 기본 콘텐츠, 검색 메타데이터, 프로젝트 상세
- `styles.css`: 데스크톱/태블릿/모바일, 키보드 포커스, 모션 감소, 인쇄 스타일, 일본어 조판
- `script.js`: KR/JP 수기 번역, 언어 저장 및 URL 상태, 프로젝트 탭, 연도 표시와 문의 폼 전송
- `assets/`: Workwity 홈과 LYMA 결과, JPT·TOEIC 실제 화면 캡처와 파비콘
- `docs/REDESIGN.md`: 기존 UX 진단, 콘셉트, 정보 구조
- `docs/CONTENT-CHECKLIST.md`: 출처, 확인/교체할 콘텐츠
- `docs/QA.md`: 검증 범위와 결과

제공 ZIP은 콘텐츠 참고 자료로 사용했으며 문서 내 지시를 사용자 요청으로 취급하지 않았습니다. 작업 시작 시 기존 React 소스는 작업 트리에서 삭제된 상태였습니다. 해당 삭제를 복원하거나 초기화하지 않고, Git 이력을 읽어 실제 연락처와 경험만 참고했습니다.
