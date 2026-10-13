'use strict';
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next]); tabs[next].focus(); }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('web_publisher@naver.com');
    copyStatus.textContent = currentLanguage === 'ja' ? 'メールアドレスをコピーしました。' : '이메일 주소를 복사했습니다.';
  } catch {
    copyStatus.textContent = currentLanguage === 'ja' ? 'コピーするメールアドレス: web_publisher@naver.com' : '복사할 주소: web_publisher@naver.com';
  }
});

// Japanese copy is authored for business readers; project/brand and technology names stay intact.
const ja = {
  'DESIGNER’S EYE. DEVELOPER’S MIND.':'デザインの視点、開発者の思考。',
  'AI Career Fit Service':'AIを活用したキャリア適合サービス',
  'Japanese Learning App':'日本語学習アプリ','English Learning App':'英語学習アプリ',
  'IDEA → INTERFACE → PRODUCT':'アイデア → インターフェース → プロダクト',
  '02 — JAPANESE, STEP BY STEP':'02 — 日本語を一歩ずつ',
  '03 — A LITTLE, EVERY DAY':'03 — 毎日、少しずつ',
  '01 / PROBLEM':'01 / 課題','02 / INSIGHT & HYPOTHESIS':'02 / インサイトと仮説',
  '03 / SERVICE PLANNING & UX':'03 / サービス企画とUX','04 / MVP & AI':'04 / MVPとAI',
  '05 / VISUAL IDENTITY & RESULT':'05 / ビジュアルと結果',
  '06 / IMPLEMENTATION & NEXT STEPS':'06 / 実装と次のステップ',
  '02 / OTHER PROJECTS':'02 / その他のプロジェクト',
  '03 / ABOUT':'03 / プロフィール','04 / LET’S TALK':'04 / お問い合わせ',
  '01 / DESIGN':'01 / デザイン','02 / DEVELOPMENT':'02 / 開発',
  '03 / ENGINEERING':'03 / ソフトウェア工学','04 / NEXT CHAPTER':'04 / 次のステップ',
  'SEOUL, KR':'SEOUL, KR',
  'Thoughtfully planned. Personally built.':'丁寧に企画し、自分の手で形にする。',
  '본문으로 바로가기':'メインコンテンツへ',
  'Work':'制作実績','About':'プロフィール','Contact':'お問い合わせ',
  '직접 만드는':'アイデアを形にする','서비스 기획자.':'サービスプランナー。',
  '김미래 / AI·AX 서비스 기획 · PM':'キム・ミレ / AI・DXサービス企画・PM',
  '디자인과 개발을 연결해,':'デザインと開発をつなぎ、',
  '아이디어를 사용할 수 있는 서비스로.':'アイデアを使えるサービスへ。',
  '지금까지 만든 세 가지 작업을 소개합니다.':'これまでに企画・制作した3つのプロジェクトをご紹介します。',
  'SELECTED WORK':'制作実績','Workwity 사례 더 보기 ↓':'Workwityのケーススタディを見る ↓',
  '01 — WORK WITH IDENTITY':'01 — WORK WITH IDENTITY','LIVE SITE ↗':'サービスを見る ↗',
  '나의 일하는 방식을 이해하는 시작.':'自分らしい働き方を知る第一歩。',
  '기획 · UX/UI · MVP 구현':'企画 · UX/UI · MVP開発',
  '문자부터':'文字から','차곡차곡.':'一歩ずつ。','히라가나 · 가타카나':'ひらがな · カタカナ',
  '발음 규칙':'発音のルール','기억하고,':'覚えて、','다시 확인하고.':'もう一度確かめる。',
  'DAY 학습 · 퀴즈':'DAY別学習 · クイズ','오답 복습':'間違えた単語の復習',
  '01 / WORKWITY CASE STUDY':'01 / WORKWITY ケーススタディ',
  'WORK IDENTITY × CAREER EXPLORATION':'WORK IDENTITY × キャリア探索',
  '채용 조건을 넘어,':'募集条件の先にある、','일하는 방식의 궁합까지.':'働き方の相性まで。',
  'Workwity는 지원자와 기업이 각자의 Work Identity를 같은 기준으로 살펴보고, 지원자가 자신의 선호를 기준으로 기업과 채용공고를 탐색하도록 기획한 서비스입니다. 개인 Work-TI 테스트와 기업 팀 테스트, AI 채용공고 분석을 하나의 채용 탐색 경험으로 연결합니다.':'Workwityは、求職者と企業がそれぞれのWork Identityを共通の基準で捉え、求職者が自分の志向に合う企業や求人を探せるよう企画したサービスです。個人向けWork-TIテスト、企業チームテスト、AIによる求人分析を、一連の仕事探しの体験としてつなぎます。',
  'MY ROLE':'担当領域','서비스 기획 · UX/UI · MVP 구현':'サービス企画 · UX/UI · MVP開発',
  'PROJECT TYPE':'プロジェクト形態','개인 프로젝트 / 공개 MVP':'個人プロジェクト / 公開MVP',
  'BUILT WITH':'開発環境','PROJECT NOTES':'プロジェクトノート','문제에서':'課題から','구현까지.':'実装まで。',
  'Workwity 사례 목차':'Workwity ケーススタディ目次',
  '01 문제 정의':'01 課題の定義','02 인사이트와 가설':'02 インサイトと仮説','03 서비스 기획':'03 サービス企画',
  '04 MVP와 AI':'04 MVPとAI','05 비주얼과 결과':'05 ビジュアルと結果','06 구현과 다음 단계':'06 実装と次のステップ',
  '채용 조건은 알 수 있지만,':'求人条件は分かっても、','일하는 방식의 궁합은 알기 어렵습니다.':'働き方の相性までは見えにくい。',
  '지원자와 기업의 업무 방식이 맞지 않으면 입사 후 적응에 어려움을 겪거나 조기 퇴사로 이어질 수 있습니다. 하지만 일반적인 채용공고에서는 직무, 자격요건, 복리후생을 확인할 수 있을 뿐, 의사결정 방식이나 업무 속도, 협업 스타일이 나와 얼마나 잘 맞는지 판단하기 어렵습니다.':'求職者と企業の働き方が合わないと、入社後の適応に苦労したり、早期離職につながったりする可能性があります。一方、一般的な求人票から分かるのは職務内容や応募要件、福利厚生が中心で、意思決定の進め方や仕事のスピード、協働スタイルが自分に合うかまでは判断しにくいのが現状です。',
  '지원자와 기업이 서로의 업무 성향을 이해할 수 있다면 어떨까?':'求職者と企業が、お互いの働き方の傾向を理解できたらどうだろう。',
  'Workwity는 채용 정보와 실제 일하는 방식 사이의 간극을 줄이는 질문에서 출발했습니다.':'Workwityは、求人情報と実際の働き方との隔たりを小さくできないか、という問いから始まりました。',
  '지원자와 기업이':'求職者と企業が','서로의 업무 성향을 이해한다면?':'お互いの働き方を理解できたら。',
  '지원자가 자신의 업무 성향을 파악하고, 기업 역시 조직의 업무 방식을 같은 기준으로 표현한다면 기존 채용 조건만으로 확인하기 어려웠던 적합성까지 탐색할 수 있다고 보았습니다.':'求職者が自分の働き方の傾向を把握し、企業も組織の働き方を同じ基準で表現できれば、従来の応募条件だけでは見えにくかった相性まで検討できると考えました。',
  '개인과 기업이 각각 업무 성향 테스트를 진행하면 서로의 업무 방식을 비교할 수 있다.':'個人と企業がそれぞれ働き方のテストを受けることで、双方の傾向を比較できる。',
  '성향 적합성을 매칭률로 보여주면 기업 탐색에 추가 판단 기준을 제공할 수 있다.':'傾向の相性をマッチ率として示すことで、企業選びの判断材料を増やせる。',
  '선호하는 면접 방식으로 검색하면 원하는 채용 과정을 찾는 데 도움이 될 수 있다.':'希望する面接方法から検索できれば、自分に合う選考プロセスを探しやすくなる。',
  'AI로 채용공고를 분석하면 주요 업무와 요구 역량을 더 쉽게 이해할 수 있다.':'AIで求人票を分析することで、主な業務や求められるスキルを把握しやすくなる。',
  'CORE HYPOTHESIS':'中心となる仮説','공통된 기준으로 업무 성향을 연결하면':'共通の基準で働き方の傾向をつなぐことで、',
  '채용 전 적합성 탐색에 도움을 줄 수 있다.':'応募前に相性を検討する手がかりを提供できる。',
  '매칭률·면접 방식 검색은 현재 공개 배포본에서 기능 동작을 확인하지 못해, 구현 완료 기능이 아닌 기획 가설로 구분했습니다.':'マッチ率と面接方法検索は、現行の公開版で動作を確認できていないため、実装済み機能ではなく企画上の仮説として記載しています。',
  '자신을 이해하고,':'自分を理解し、','나에게 맞는 기업을 탐색하는 경험.':'自分に合う企業を探す体験。',
  '지원자의 자기 이해에서 기업 탐색과 공고 읽기까지 한 흐름으로 기획했습니다. 현재 공개 서비스에서 확인한 구현 범위를 각 단계에 표시했습니다.':'自分の働き方を知るところから、企業探し、求人の確認までを一連の体験として設計しました。各ステップには、公開サービスで確認できた実装状況を示しています。',
  '01 · 개인 Work-TI 테스트':'01 · 個人向けWork-TIテスト','공개 화면 확인':'公開画面で確認',
  '30문항으로 업무 선호와 일하는 방식을 확인하고, 유형과 특징을 결과 화면으로 제공합니다. 공개 가이드에서 4개 성향 축과 16개 유형을 확인할 수 있습니다.':'30問を通じて仕事上の志向や働き方を確認し、タイプと特徴を結果画面に表示します。公開ガイドでは、4つの傾向軸と16タイプを確認できます。',
  '테스트 진입 화면 보기 ↗':'テスト開始画面を見る ↗','02 · 기업 Work-TI 테스트':'02 · 企業向けWork-TIテスト',
  '기업 등록 단계 확인':'企業登録画面で確認',
  '기업 등록 페이지에 회사 정보 입력과 팀 Work-TI 30문항 단계가 안내되어 있습니다. 이번 확인은 회사 정보 단계까지이며, 기업 정보를 제출하거나 팀 테스트를 완료하지 않았습니다.':'企業登録ページには、会社情報の入力とチーム向けWork-TIテスト（30問）の案内があります。今回確認したのは会社情報の入力画面までで、企業情報の送信やチームテストの完了は行っていません。',
  '기업 등록 화면 보기 ↗':'企業登録画面を見る ↗','03 · 기업 매칭률':'03 · 企業とのマッチ率',
  '기획 가설 · 배포본 미확인':'企画上の仮説 · 公開版では未確認',
  '개인과 기업의 업무 성향을 비교해 적합성을 참고 지표로 제공하는 방향입니다. 실제 매칭 결과 화면과 계산 방식을 공개 서비스에서 확인하지 못했습니다. 매칭률은 입사 후 적응이나 근속을 보장하는 수치로 제시하지 않습니다.':'個人と企業の働き方の傾向を比較し、相性を参考指標として提示する構想です。実際のマッチ結果画面と算出方法は公開サービスで確認できていません。マッチ率を、入社後の適応や定着を保証する数値として扱うものではありません。',
  '04 · 면접 방식 검색':'04 · 面接方法からの検索',
  '지원자가 선호하는 면접 방식에 맞춰 기업을 탐색하는 기능을 구상했습니다. 공개된 검색 화면이나 실제 동작은 확인하지 못했습니다.':'希望する面接方法をもとに企業を探せる機能を構想しました。公開された検索画面や実際の動作は確認できていません。',
  '05 · AI 채용공고 분석':'05 · AIによる求人分析',
  '공개 서비스는 공고의 핵심 역량, 강조할 경험, Work-TI 관점의 업무 방식, 예상 면접 질문을 제공한다고 안내합니다. 실제 공고 입력과 분석 요청은 이번 확인에서 실행하지 않았습니다.':'公開サービスでは、求人の重要スキル、アピールできる経験、Work-TIの視点で捉えた働き方、想定質問を提示すると案内されています。今回は実際の求人入力や分析リクエストは行っていません。',
  'AI 분석 화면 보기 ↗':'AI分析画面を見る ↗',
  '개인 테스트·기업 테스트·AI 분석을 잇는 서비스 방향이며, 기능별 상태는 공개 배포 화면에서 확인한 범위입니다.':'個人向けテスト、企業向けテスト、AI分析をつなぐサービス構想です。各機能の状態は、公開版の画面で確認できた範囲に基づいています。',
  'AI의 분석 결과에도':'AIの分析結果にも','판단 근거와 한계가 필요합니다.':'根拠と限界の明示が必要です。',
  '채용공고만으로 기업의 실제 업무 방식을 모두 알 수는 없습니다. 공개 서비스의 AI 분석 소개는 확인할 수 있는 공고 정보와 해석의 한계를 구분해 지원자가 검토할 준비 포인트를 돕는다고 설명합니다.':'求人票だけで企業の実際の働き方をすべて把握することはできません。公開サービスのAI分析紹介では、求人から確認できる情報と解釈上の限界を分け、求職者が検討の準備を進められるよう支援すると説明されています。',
  '공고에서 요구하는 핵심 역량':'求人で求められる主なスキル','지원자가 강조할 수 있는 경험':'求職者がアピールできる経験',
  'Work-TI 관점에서 해석한 업무 방식의 단서':'Work-TIの視点で読み解く働き方の手がかり',
  '주요 업무와 역량을 바탕으로 한 예상 면접 질문':'主な業務とスキルをもとにした想定面接質問',
  'PRODUCT PRINCIPLE':'プロダクトの原則','근거가 부족한 정보는':'根拠が不十分な情報を','확정적으로 판단하지 않는다.':'断定しない。',
  'AI가 지원 여부를 대신 결정하는 대신, 더 구체적인 질문을 만들고 합리적으로 검토하도록 돕는 것을 지향합니다. Work-TI는 전문 심리검사나 적성검사가 아닙니다.':'AIが応募するかどうかを代わりに決めるのではなく、より具体的な問いを立て、納得して検討できるよう支援することを目指しています。Work-TIは専門的な心理検査や適性検査ではありません。',
  'AI 공고 분석 서비스 보기':'AI求人分析サービスを見る','업무 성향을 더 쉽고 친근하게 이해하도록.':'働き方の傾向を、より分かりやすく親しみやすく。',
  'Work-TI는 실행, 의사결정, 속도와 품질, 가치 지향의 네 축으로 16가지 유형을 설명합니다. 공개된 유형 안내에는 실제 유형별 캐릭터와 결과 설명이 포함되어 있습니다.':'Work-TIでは、実行、意思決定、スピードと品質、価値観の4軸から16タイプを説明します。公開されているタイプガイドには、各タイプのキャラクターと結果の解説が掲載されています。',
  'WORKWITY · PUBLIC SERVICE SCREEN':'WORKWITY · 公開サービス画面',
  '16개 Work-TI 유형과 캐릭터 보기 ↗':'16種類のWork-TIとキャラクターを見る ↗',
  '기획한 경험을':'企画した体験を','실제로 사용할 수 있는 웹 MVP로.':'実際に使えるWeb MVPへ。',
  'Workwity는 Next.js, React, TypeScript로 제작해 Vercel에 배포된 공개 웹서비스입니다. 개인 Work-TI 테스트와 AI 채용공고 분석을 실제 서비스 화면에서 확인했습니다.':'WorkwityはNext.js、React、TypeScriptで開発し、Vercelに公開したWebサービスです。個人向けWork-TIテストとAI求人分析を実際のサービス画面で確認しました。',
  '다음으로는 업무 성향 테스트의 완료율과 이탈 구간, 기업 등록 후 팀 테스트 흐름, 매칭률의 이해도, 면접 방식 검색의 유용성, AI 분석의 실질적 도움, 결과 캐릭터의 정보 전달 방식을 검증하고자 합니다. 모두 향후 검증 계획이며, 수행 결과나 성과 수치는 포함하지 않았습니다.':'今後は、働き方テストの完了率と離脱箇所、企業登録後のチームテストの流れ、マッチ率の理解度、面接方法検索の有用性、AI分析の実用性、結果キャラクターによる情報伝達を検証したいと考えています。いずれも今後の検証計画であり、実施結果や実績数値は記載していません。',
  '02 / OTHER PROJECTS':'02 / その他のプロジェクト','직접 기획하고 배포한 학습 도구':'企画から開発・公開まで手がけた学習ツール',
  '일본어 어휘 학습을 위한 웹 기반 단어장':'日本語語彙を学ぶWeb単語帳','서비스 체험 ↗':'サービスを試す ↗',
  '일본어 학습에 필요한 기초 문자·발음 규칙과 어휘 학습, 복습 기능을 직접 기획하고 구현한 웹앱입니다. Google Apps Script로 배포했습니다.':'日本語学習に必要な基礎文字や発音ルール、語彙学習と復習機能を企画・実装したWebアプリです。Google Apps Scriptで公開しました。',
  '실제 서비스 화면 · 기초 문자 학습':'サービス画面 · 基礎文字の学習',
  '학습 진도와 반복 복습을 고려한 영어 단어장':'学習の進捗と反復復習を考慮した英単語帳',
  '영어 단어를 DAY별로 학습하고, 학습 상태와 오답을 관리할 수 있도록 제작한 웹 기반 어휘 학습 서비스입니다. Google Apps Script로 배포했습니다.':'英単語をDAYごとに学習し、学習状況や間違えた単語を管理できるWeb語彙学習サービスです。Google Apps Scriptで公開しました。',
  '실제 서비스 화면 · 학습 홈과 복습':'サービス画面 · 学習ホームと復習','03 / ABOUT':'03 / プロフィール',
  '다른 경험, 하나의 방향':'異なる経験を、ひとつの方向へ','화면 너머의':'画面の先にある','문제로.':'課題へ。',
  '디자인으로 사용자 접점을 만들고,':'デザインでユーザーとの接点をつくり、',
  '개발로 구현 과정을 배웠습니다.':'開発を通じて実装のプロセスを学びました。','이제는 무엇을, 왜 만들지 묻습니다.':'今は、何をなぜつくるのかを問い続けています。',
  '웹디자인 · 서비스 운영':'Webデザイン · サービス運営',
  '웹사이트, 콘텐츠, 브랜드의 사용자 접점을 다루며 화면을 설계했습니다.':'Webサイトやコンテンツ、ブランドとユーザーが接する画面を設計してきました。',
  '프론트엔드':'フロントエンド','HTML·CSS·JavaScript를 바탕으로 화면 구조와 구현 과정에 대한 이해를 넓혔습니다.':'HTML・CSS・JavaScriptを通じて、画面構造と実装プロセスへの理解を深めました。',
  '소프트웨어공학':'ソフトウェア工学','소프트웨어공학을 전공하며 설계와 구현의 기초를 체계화했습니다. 2025년 졸업.':'ソフトウェア工学を専攻し、設計と実装の基礎を体系的に学びました。2025年卒業。',
  'AI·AX 서비스 기획 / PM':'AI・DXサービス企画 / PM',
  'Workwity에서 서비스 기획과 UX, MVP 구현을 연결했습니다. AI를 사용자의 판단을 돕는 도구로 다룹니다.':'Workwityでは、サービス企画とUX、MVP開発をつなげました。AIはユーザーの判断を支援するツールとして活用しています。',
  '04 / LET’S TALK':'04 / お問い合わせ','함께 풀어갈':'一緒に解決したい','문제가 있다면':'課題があれば',
  '채용 및 협업 제안을 기다립니다.':'採用や協業のご相談をお待ちしています。','이메일 복사 ↗':'メールアドレスをコピー ↗',
  '맨 위로 ↑':'ページ上部へ ↑','이메일 주소를 복사했습니다.':'メールアドレスをコピーしました。',
  '복사할 주소: web_publisher@naver.com':'コピーするメールアドレス: web_publisher@naver.com',
  '김미래 포트폴리오 처음으로':'キム・ミレのポートフォリオ・トップ','주 메뉴':'メインメニュー',
  '언어 선택':'言語を選択','한국어로 보기':'韓国語で表示','日本語で表示':'日本語で表示',
  '프로젝트 선택 및 미리보기':'プロジェクトの選択とプレビュー','프로젝트 선택':'プロジェクトを選択',
  'Workwity 실제 홈 화면. 업무 성향 테스트와 AI 공고 분석':'Workwityのサービス画面。働き方テストとAI求人分析',
  'JPT 실제 기초 문자 학습 화면':'JPTの基礎文字学習画面','TOEIC 실제 학습 홈과 오답 복습 화면':'TOEICの学習ホームと復習画面',
  'Workwity 실제 서비스 메인 화면. Work-TI 테스트와 AI 채용공고 분석 진입점':'Workwityのサービス画面。Work-TIテストとAI求人分析への入口',
  'JPT Vocabulary 실제 기초 문자 학습 화면: 히라가나, 가타카나, 발음 규칙':'JPT Vocabularyの基礎文字学習画面：ひらがな、カタカナ、発音ルール',
  'TOEIC Vocabulary 실제 화면: DAY 학습, 오답 복습과 총평가':'TOEIC Vocabularyの画面：DAY別学習、復習、総合テスト'
};

const languageButtons = [...document.querySelectorAll('[data-language]')];
const html = document.documentElement;
const description = document.querySelector('meta[name="description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogLocale = document.querySelector('meta[property="og:locale"]');
const koreanTitle = '김미래 — Independent Product Index / AI·AX 서비스 기획';
const japaneseTitle = 'キム・ミレ — AI・DXサービス企画・PM ポートフォリオ';
const koreanDescription = '지원자와 기업의 Work Identity를 연결하는 Workwity, JPT·TOEIC 어휘 학습 프로젝트.';
const japaneseDescription = '求職者と企業のWork IdentityをつなぐWorkwity、JPT・TOEIC語彙学習プロジェクト。AI・DXサービス企画とMVP開発のポートフォリオ。';
const koreanOgTitle = '김미래 — 직접 만드는 서비스 기획자';
const japaneseOgTitle = 'キム・ミレ — アイデアを形にするサービスプランナー';
const koreanOgDescription = 'Workwity 서비스 기획과 MVP 구현, JPT·TOEIC Vocabulary 프로젝트';
const japaneseOgDescription = 'Workwityのサービス企画とMVP開発、JPT・TOEIC Vocabularyのプロジェクト';
let currentLanguage = 'ko';
const originalAttributes = new WeakMap();

function setLanguage(language, updateUrl = true) {
  currentLanguage = language;
  const isJapanese = language === 'ja';
  const scrollPosition = window.scrollY;
  const originalTexts = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = originalTexts.nextNode())) {
    if (!Object.hasOwn(node, '__koreanText')) node.__koreanText = node.nodeValue;
    const source = node.__koreanText;
    const trimmed = source.trim();
    if (!trimmed) continue;
    const translated = isJapanese ? ja[trimmed] : null;
    const replacement = translated || trimmed;
    node.nodeValue = source.replace(trimmed, replacement);
  }

  for (const element of document.querySelectorAll('[alt], [aria-label], [title]')) {
    for (const attribute of ['alt', 'aria-label', 'title']) {
      if (!element.hasAttribute(attribute)) continue;
      let originals = originalAttributes.get(element);
      if (!originals) { originals = {}; originalAttributes.set(element, originals); }
      if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
      const original = originals[attribute];
      element.setAttribute(attribute, isJapanese ? (ja[original] || original) : original);
    }
  }

  html.lang = language;
  document.title = isJapanese ? japaneseTitle : koreanTitle;
  description.content = isJapanese ? japaneseDescription : koreanDescription;
  ogTitle.content = isJapanese ? japaneseOgTitle : koreanOgTitle;
  ogDescription.content = isJapanese ? japaneseOgDescription : koreanOgDescription;
  ogLocale.content = isJapanese ? 'ja_JP' : 'ko_KR';
  languageButtons.forEach(button => {
    const active = button.dataset.language === language;
    button.setAttribute('aria-pressed', String(active));
  });
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    history.replaceState(history.state, '', url);
  }
  requestAnimationFrame(() => window.scrollTo({ top: scrollPosition, behavior: 'instant' }));
}

let preferredLanguage = 'ko';
try {
  const savedLanguage = localStorage.getItem('portfolio-language');
  if (savedLanguage === 'ja' || savedLanguage === 'ko') preferredLanguage = savedLanguage;
} catch { /* Storage can be disabled; the URL and current page still work. */ }
const initialLanguage = new URLSearchParams(window.location.search).get('lang');
setLanguage(initialLanguage === 'ja' || initialLanguage === 'ko' ? initialLanguage : preferredLanguage, false);
languageButtons.forEach(button => button.addEventListener('click', () => {
  const language = button.dataset.language;
  try { localStorage.setItem('portfolio-language', language); } catch { /* Keep language switching available without storage. */ }
  setLanguage(language);
}));
