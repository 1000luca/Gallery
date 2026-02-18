# 강명순 화가 갤러리 웹사이트 — Specification v2

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | 강명순 갤러리 (Kang Myung Soon Gallery) |
| **목적** | 화가 강명순의 작품을 전문적으로 전시하는 온라인 갤러리. 년도별 탐색, 작품 상세 정보 제공 |
| **타겟 사용자** | 미술 애호가, 컬렉터, 갤러리 관계자, 일반 방문자 |
| **언어** | 한국어 (일부 영문 병기) |

---

## 2. 기술 스택 (2026년 최신)

| 범주 | 기술 | 버전 | 선정 이유 |
|------|------|------|----------|
| 빌드 도구 | **Vite** | `7.x` | 최신 안정판. 초고속 HMR, ESM 네이티브, 빌드 성능 최고 |
| UI 프레임워크 | **React** | `19.x` | 최신 안정판. 자동 배칭, `use()` hook, 향상된 동시성 렌더링 |
| 애니메이션 | **Motion** (prev. Framer Motion) | `12.x` | 최신판. 선언적 애니메이션, `AnimatePresence`, `layout` 애니메이션 |
| 스타일링 | **CSS Modules** | — | 컴포넌트 스코프 스타일링, 빌드 타임 최적화, 런타임 비용 없음 |
| 아이콘 | **Lucide React** | 최신 | 경량 트리셰이킹 가능 SVG 아이콘 |
| 폰트 | **Google Fonts** | — | Cormorant Garamond + Noto Serif KR |
| 패키지 매니저 | **npm** | 10.x | Node.js 내장 |

---

## 3. 작품 분석 & 디자인 무드

### 3.1 작품별 색감 분석

| # | 작품 설명 | 주요 색감 | 분위기 |
|---|----------|----------|--------|
| 1 | 네 개의 원 — 추상, 두꺼운 텍스처 배경 | 크림 화이트, 세피아 브라운, 로즈 레드, 핫 핑크 | 시간의 흐름, 변화, 명상적 |
| 2 | 꽃밭 풍경 — 장미와 작은 꽃들의 군집 | 핑크, 민트 그린, 크림, 레드, 살구색 | 몽환적, 동화 같은, 봄의 생동감 |
| 3 | 단일 장미 — 근접 촬영, 서명 "2023" | 골든 옐로우, 옥어, 올리브, 로즈 핑크 | 따뜻한 고요함, 생명의 아름다움 |
| 4 | 꽃과 비 — 어두운 배경의 꽃 | 딥 틸, 시안 블루, 라임 그린, 다크 네이비 | 깊은 명상, 비 오는 날의 서정 |
| 5 | 흰 꽃 — 강렬한 배경 위 큰 꽃 | 오렌지, 골드, 마젠타, 크림 화이트, 딥 레드 | 강렬한 생명력, 에너지 |

### 3.2 공통 예술적 특성

- **매체**: 혼합매체 (한지, 아크릴, 오일파스텔, 콜라주)
- **질감**: 두텁고 유기적인 임파스토 기법, 레이어링
- **모티프**: 꽃 (장미, 동백), 원형, 자연의 순환
- **색 대비**: 따뜻한 톤(크림/골드/핑크) ↔ 차가운 톤(틸/블루/그린)
- **감성**: 명상적, 서정적, 자연과 생명에 대한 경외

### 3.3 웹 디자인 무드 번역

작품의 감성을 웹 디자인에 직접적으로 반영합니다:

| 작품 특성 | 웹 디자인 반영 |
|----------|---------------|
| 크림/아이보리 캔버스 | 페이지 배경: 따뜻한 크림 화이트 `#FAF7F2` |
| 골든 세피아 톤 | 악센트 컬러: 골든 베이지 `#C9A96E` (CTA, 구분선, 활성 상태) |
| 로즈/핑크 포인트 | 포인트 컬러: 로즈 `#B86B77` (필터 활성, 호버) |
| 딥 틸/네이비 깊이 | 텍스트/푸터: 딥 틸 `#1A3C4D` |
| 혼합매체 텍스처 | 미묘한 paper noise 텍스처 배경 오버레이 |
| 유기적 붓질 느낌 | 부드러운 border-radius, organic UI 요소 |
| 레이어링 기법 | 요소간 미묘한 그림자, 겹침 효과 |
| 명상적·서정적 템포 | 느긋한 애니메이션 (0.6–0.8s), 여유로운 간격 |

---

## 4. 디자인 시스템

### 4.1 컬러 팔레트

```css
:root {
  /* 배경 */
  --color-bg:           #FAF7F2;   /* 따뜻한 크림 (캔버스 느낌) */
  --color-bg-alt:       #F0EBE3;   /* 약간 어두운 크림 (섹션 교차) */
  --color-surface:      #FFFFFF;   /* 카드, 모달 표면 */

  /* 텍스트 */
  --color-text:         #2C2420;   /* 따뜻한 차콜 (본문) */
  --color-text-secondary: #6B5E54; /* 부제목 */
  --color-text-muted:   #9A8E84;   /* 캡션, 메타 정보 */

  /* 악센트 */
  --color-accent:       #C9A96E;   /* 골든 베이지 (CTA, 링크, 구분선) */
  --color-accent-hover: #B8944F;   /* 골든 베이지 호버 */
  --color-rose:         #B86B77;   /* 로즈 (활성 필터, 포인트) */
  --color-rose-light:   #D4949E;   /* 로즈 라이트 (호버) */
  --color-teal:         #1A3C4D;   /* 딥 틸 (헤더, 푸터, 강조) */
  --color-teal-light:   #2A5A6E;   /* 틸 라이트 */

  /* 오버레이 */
  --color-overlay:      rgba(26, 60, 77, 0.75);  /* 틸 기반 오버레이 */
  --color-overlay-light: rgba(250, 247, 242, 0.85); /* 크림 기반 글래스 */
}
```

### 4.2 타이포그래피

```css
:root {
  /* 폰트 패밀리 */
  --font-display: 'Cormorant Garamond', 'Georgia', serif;     /* 영문 대제목 */
  --font-heading: 'Noto Serif KR', '바탕', serif;             /* 한글 제목 */
  --font-body:    'Noto Serif KR', '바탕', serif;             /* 본문 */

  /* 폰트 크기 (fluid, clamp 사용) */
  --text-hero:    clamp(48px, 8vw, 80px);    /* 히어로 메인 타이틀 */
  --text-hero-sub: clamp(18px, 3vw, 28px);   /* 히어로 서브 타이틀 */
  --text-h1:      clamp(32px, 5vw, 48px);    /* 섹션 대제목 */
  --text-h2:      clamp(24px, 3vw, 32px);    /* 섹션 소제목 */
  --text-h3:      clamp(18px, 2vw, 24px);    /* 카드/모달 제목 */
  --text-body:    clamp(15px, 1.5vw, 17px);  /* 본문 */
  --text-caption: clamp(12px, 1vw, 14px);    /* 캡션, 메타 */
  --text-small:   12px;                       /* 최소 텍스트 */

  /* 줄 높이 */
  --leading-tight:  1.3;
  --leading-normal: 1.7;
  --leading-loose:  2.0;

  /* 자간 */
  --tracking-tight:  -0.02em;
  --tracking-normal: 0;
  --tracking-wide:   0.05em;
  --tracking-wider:  0.15em;  /* 대문자 제목용 */
}
```

### 4.3 간격 시스템

```css
:root {
  --space-2xs: 4px;
  --space-xs:  8px;
  --space-sm:  12px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;

  --max-width: 1320px;
  --max-width-narrow: 900px;
}
```

### 4.4 효과 & 그림자

```css
:root {
  /* 그림자 */
  --shadow-sm:    0 1px 3px rgba(0, 0, 0, 0.04);
  --shadow-card:  0 4px 24px rgba(0, 0, 0, 0.06);
  --shadow-card-hover: 0 12px 48px rgba(0, 0, 0, 0.10);
  --shadow-modal: 0 24px 80px rgba(0, 0, 0, 0.20);

  /* 모서리 */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  12px;
  --radius-xl:  20px;

  /* 전환 */
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast:   0.2s;
  --duration-normal: 0.4s;
  --duration-slow:   0.7s;

  /* 블러 */
  --blur-glass: blur(16px);
  --blur-bg:    blur(40px);
}
```

---

## 5. 페이지 구조 & 컴포넌트 상세

전체 페이지는 **Single Page Application** 방식의 스크롤 기반 구조:

```
┌─ Navigation (고정) ──────────────────────────────────────────┐
│                                                              │
├─ Section 1: Hero ────────────────────────────────────────────┤
│  대표작 배경 + 화가 이름 + 한 줄 소개 + CTA                    │
│                                                              │
├─ Section 2: Gallery ─────────────────────────────────────────┤
│  ┌─ 년도 필터 탭 ──────────────────────────────────┐         │
│  │ [전체] [2022] [2023] [2024] [2025]              │         │
│  └─────────────────────────────────────────────────┘         │
│  ┌─ 작품 그리드 (CSS Grid, 3→2→1열) ──────────────┐         │
│  │ ┌────────┐ ┌────────┐ ┌────────┐               │         │
│  │ │ArtCard │ │ArtCard │ │ArtCard │               │         │
│  │ └────────┘ └────────┘ └────────┘               │         │
│  │ ┌────────┐ ┌────────┐                          │         │
│  │ │ArtCard │ │ArtCard │                          │         │
│  │ └────────┘ └────────┘                          │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
├─ Section 3: About ───────────────────────────────────────────┤
│  화가 프로필 + 예술 철학 + 약력                                │
│                                                              │
├─ Section 4: Footer ──────────────────────────────────────────┤
│  저작권 + 연락처                                              │
│                                                              │
├─ Modal (Overlay) ────────────────────────────────────────────┤
│  카드 클릭 시 → 작품 상세 보기 (이미지 + 정보)                  │
└──────────────────────────────────────────────────────────────┘
```

---

### 5.1 Navigation

```
스크롤 전:
┌──────────────────────────────────────────────────────────────┐
│  (투명 배경)                                                  │
│  강명순                    작품  ·  소개  ·  연락처             │
│  KANG MYUNG SOON                                             │
└──────────────────────────────────────────────────────────────┘

스크롤 후 (50px+):
┌──────────────────────────────────────────────────────────────┐
│  (글래스모피즘: 크림 반투명 + blur + 하단 미세 보더)              │
│  강명순                    작품  ·  소개  ·  연락처             │
│  KANG MYUNG SOON                                             │
└──────────────────────────────────────────────────────────────┘

모바일 (≤768px):
┌──────────────────────────────────────────────────────────────┐
│  강명순                                            ☰         │
└──────────────────────────────────────────────────────────────┘
→ 햄버거 클릭 시 풀스크린 오버레이 메뉴 (fade-in, 중앙 정렬 링크)
```

| 속성 | 사양 |
|------|------|
| 위치 | `position: fixed; top: 0; z-index: 100` |
| 높이 | 80px (데스크톱), 64px (모바일) |
| 로고 | 좌측 — 한글 이름 (`font-heading`, 18px, 700) + 영문 (`font-display`, 12px, letter-spacing: 0.15em) |
| 메뉴 링크 | `font-body` 14px, `--tracking-wide`, uppercase 아님, `--color-text-secondary` |
| 메뉴 호버 | `--color-accent` 색상 전환 + 밑줄 slide-in 애니메이션 |
| 스크롤 배경 | `background: var(--color-overlay-light)` + `backdrop-filter: var(--blur-glass)` |
| 전환 | 배경색 `--duration-normal` `--ease-out` |

---

### 5.2 Hero Section

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ╔════════════════════════════════════════════════════════╗   │
│  ║  [대표 작품 이미지 — object-fit: cover, 100vh]         ║   │
│  ║  + linear-gradient 오버레이                            ║   │
│  ║       (top: rgba(26,60,77,0.2) → bottom: (0.6))       ║   │
│  ║                                                       ║   │
│  ║               강 명 순                                ║   │
│  ║        ── KANG MYUNG SOON ──                          ║   │
│  ║                                                       ║   │
│  ║    "자연의 숨결을 캔버스에 담다"                         ║   │
│  ║                                                       ║   │
│  ║            ↓ 작품 보기                                 ║   │
│  ╚════════════════════════════════════════════════════════╝   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| 속성 | 사양 |
|------|------|
| 높이 | `100vh` (최소 600px) |
| 배경 이미지 | `artwork-5.jpg` (흰 꽃 작품 — 가장 상징적) `object-fit: cover` |
| 오버레이 | `linear-gradient(to bottom, rgba(26,60,77,0.15) 0%, rgba(26,60,77,0.55) 100%)` |
| 한글 이름 | `font-heading` `var(--text-hero)` weight 700, 흰색, `letter-spacing: 0.3em` |
| 영문 이름 | `font-display` `var(--text-hero-sub)` weight 300, 흰색 80% opacity, `letter-spacing: 0.2em` |
| 인용문 | `font-body` `var(--text-body)` weight 400, 흰색 70% opacity, 이탤릭 |
| CTA | `font-body` 14px, 테두리 1px 흰색, 패딩 12px 32px, 호버 시 배경 흰색 전환 |
| 텍스트 정렬 | 중앙, `flexbox` 세로 가운데 |
| 진입 애니메이션 | 각 요소 stagger: 한글(0s) → 영문(0.2s) → 인용문(0.4s) → CTA(0.6s), `opacity: 0→1` + `y: 30→0` |
| 패럴랙스 | 스크롤 시 배경 이미지 약간 느리게 이동 (`transform: translateY(scroll * 0.3)`) |

---

### 5.3 Gallery Section (핵심 기능)

이 섹션이 웹사이트의 핵심입니다. 사용자가 작품을 **년도별로 필터링**하고 **갤러리 형식으로 탐색**합니다.

#### 5.3.1 섹션 헤더

```
                    ─── 작 품 ───
              Works by Kang Myung Soon
```

- 한글 제목: `font-heading` `var(--text-h1)` weight 700, 가운데 정렬
- 영문 부제: `font-display` `var(--text-caption)` weight 300, `--color-text-muted`, `--tracking-wider`
- 좌우 장식선: `--color-accent` 1px, 너비 60px

#### 5.3.2 년도 필터 탭

```
   ┌────────────────────────────────────────────────┐
   │  전체    2022    2023    2024    2025           │
   │  ────                                          │
   │  (활성 탭 아래 골든 밑줄 슬라이드)                │
   └────────────────────────────────────────────────┘
```

| 속성 | 사양 |
|------|------|
| 레이아웃 | 수평 중앙 정렬, `gap: var(--space-xl)` |
| 비활성 탭 | `font-body` 15px, `--color-text-muted`, `cursor: pointer` |
| 활성 탭 | `--color-text` weight 600 + 하단 2px `--color-accent` 밑줄 |
| 밑줄 전환 | `motion.div layoutId="underline"` — 탭 간 슬라이드 애니메이션 |
| 호버 | `--color-text-secondary` 색상 전환 |
| 데이터 소스 | `artworks.js`의 `getYears()` → 동적으로 년도 목록 생성 |
| 클릭 동작 | `setActiveYear(year)` → 필터링된 작품 목록 갱신 |

#### 5.3.3 작품 그리드

```
데스크톱 (≥1025px) — 3열:
┌──────────┐  ┌──────────┐  ┌──────────┐
│          │  │          │  │          │
│  작품 1  │  │  작품 2  │  │  작품 3  │
│          │  │          │  │          │
│──────────│  │──────────│  │──────────│
│ 제목     │  │ 제목     │  │ 제목     │
│ 2023     │  │ 2024     │  │ 2023     │
└──────────┘  └──────────┘  └──────────┘

태블릿 (641–1024px) — 2열:
┌──────────┐  ┌──────────┐
│  작품 1  │  │  작품 2  │
└──────────┘  └──────────┘

모바일 (≤640px) — 1열:
┌──────────────────────────┐
│         작품 1           │
└──────────────────────────┘
```

| 속성 | 사양 |
|------|------|
| 레이아웃 | `display: grid`, `grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))` |
| 갭 | `var(--space-lg)` (24px) |
| 최대 너비 | `var(--max-width)` 중앙 정렬 |
| 패딩 | 좌우 `var(--space-xl)`, 상하 `var(--space-3xl)` |
| 필터 전환 | `AnimatePresence mode="wait"` + 각 카드 `layout` prop → 재배치 시 spring 애니메이션 |
| 빈 상태 | "해당 년도의 작품이 없습니다" 텍스트 (있을 경우) |

#### 5.3.4 ArtworkCard (개별 작품 카드)

```
기본 상태:                        호버 상태:
┌──────────────────┐              ┌──────────────────┐
│                  │              │ ┌──────────────┐ │
│                  │              │ │ (그라디언트   │ │
│   작품 이미지     │              │ │  오버레이)    │ │
│                  │              │ │              │ │
│                  │              │ │  작품 제목    │ │
│                  │              │ │  2023        │ │
│──────────────────│              │ └──────────────┘ │
│ 작품 제목         │              │──────────────────│
│ 2023 · 혼합매체   │              │ 작품 제목        │
└──────────────────┘              │ 2023 · 혼합매체  │
                                  └──────────────────┘
```

| 속성 | 사양 |
|------|------|
| 구조 | 이미지 영역 (상단 70%) + 정보 영역 (하단 30%) |
| 이미지 | `object-fit: cover`, `aspect-ratio: 4/5` (세로 비율), `border-radius: var(--radius-lg) var(--radius-lg) 0 0` |
| 이미지 lazy load | `loading="lazy"` 속성 |
| 정보 영역 | 패딩 `var(--space-md)`, 배경 `--color-surface` |
| 제목 | `font-heading` `var(--text-h3)` weight 500, `--color-text` |
| 메타 | `font-body` `var(--text-caption)`, `--color-text-muted`, "2023 · 혼합매체 on 캔버스" |
| 카드 그림자 | `var(--shadow-card)` |
| 호버 | `scale(1.015)` + `var(--shadow-card-hover)` + 이미지 위 그라디언트 오버레이 fade-in |
| 호버 오버레이 | `linear-gradient(transparent 40%, rgba(26,60,77,0.7) 100%)` + 흰색 제목·년도 텍스트 |
| 클릭 | `onClick` → 부모의 `setSelectedArtwork(artwork)` |
| 스크롤 진입 | `whileInView={{ opacity: 1, y: 0 }}` from `{{ opacity: 0, y: 40 }}`, `transition: { delay: index * 0.1, duration: 0.6 }` |
| Props | `artwork: Artwork`, `onClick: () => void`, `index: number` |

---

### 5.4 ArtworkModal (작품 상세 보기)

작품 카드 클릭 시 **풀스크린 모달**로 작품의 고해상도 이미지와 상세 정보를 표시합니다.

```
데스크톱:
┌──────────────────────────────────────────────────────────────┐
│  ●●●●● 반투명 틸 오버레이 (클릭 시 닫기) ●●●●●    [ ✕ ]     │
│                                                              │
│   ┌─────────────────────────┐  ┌────────────────────────┐   │
│   │                         │  │                        │   │
│   │                         │  │  시간의 흐름            │   │
│   │     고해상도 작품 이미지  │  │  Flow of Time           │   │
│   │     (object-fit:        │  │                        │   │
│   │      contain)           │  │  ─── 2023 ───          │   │
│   │                         │  │                        │   │
│   │                         │  │  53 × 65 cm            │   │
│   │                         │  │  혼합매체 on 캔버스      │   │
│   │                         │  │                        │   │
│   │                         │  │  시간의 흐름 속에서      │   │
│   │                         │  │  변화하는 색의 여정을    │   │
│   │                         │  │  표현한 작품. 어둠에서   │   │
│   │                         │  │  빛으로, 차가움에서      │   │
│   │                         │  │  따뜻함으로 이어지는...  │   │
│   └─────────────────────────┘  └────────────────────────┘   │
│                                                              │
│     [ ← 이전 작품 ]                    [ 다음 작품 → ]       │
└──────────────────────────────────────────────────────────────┘

모바일 (세로 스택):
┌──────────────────────────────────┐
│                           [ ✕ ] │
│  ┌────────────────────────────┐ │
│  │    고해상도 작품 이미지      │ │
│  └────────────────────────────┘ │
│                                  │
│  시간의 흐름                     │
│  Flow of Time                    │
│  ─── 2023 ───                    │
│  53 × 65 cm · 혼합매체           │
│                                  │
│  설명 텍스트...                   │
│                                  │
│  [ ← ]              [ → ]       │
└──────────────────────────────────┘
```

| 속성 | 사양 |
|------|------|
| 오버레이 | `var(--color-overlay)` — 틸 기반 75% 투명도, 클릭 시 닫기 |
| 콘텐츠 영역 | `max-width: 1100px`, `max-height: 90vh`, 중앙 정렬 |
| 레이아웃 | 데스크톱: 2컬럼 (이미지 58% + 정보 42%), 모바일: 세로 스택 |
| 이미지 | `object-fit: contain`, 최대 높이 80vh, `border-radius: var(--radius-lg)` |
| 제목 | `font-heading` `var(--text-h2)`, weight 700, `--color-text` |
| 영문 제목 | `font-display` `var(--text-body)`, weight 300, `--color-text-muted` |
| 년도 구분선 | `─── 2023 ───` 좌우 골든 라인 + `--color-accent` 텍스트 |
| 메타 정보 | `var(--text-caption)`, `--color-text-secondary` |
| 설명 | `var(--text-body)`, `--leading-loose`, `--color-text` |
| 닫기 | ✕ 버튼 (우상단), `ESC` 키, 오버레이 클릭 |
| 네비게이션 | `←` `→` 키보드 + 화면 좌우 버튼, 현재 필터 내에서만 이동 |
| 진입 | 오버레이 `opacity: 0→1` (0.3s) + 콘텐츠 `scale: 0.92→1` + `opacity: 0→1` (0.4s) |
| 퇴장 | 반대로 `opacity: 1→0` + `scale: 1→0.95` (0.25s) |
| 스크롤 잠금 | `document.body.style.overflow = 'hidden'` (오픈 시) / `'auto'` (닫기 시) |
| 포커스 트랩 | 모달 내에서 Tab 순환 |

---

### 5.5 About Section

```
┌──────────────────────────────────────────────────────────────┐
│                (배경: --color-bg-alt)                          │
│                                                              │
│         ─── 작가 소개 ───                                     │
│       About the Artist                                       │
│                                                              │
│  ┌────────────┐                                              │
│  │            │   강명순 (Kang Myung Soon)                    │
│  │  프로필    │                                              │
│  │  이미지    │   혼합매체를 통해 자연과 생명의 순환을           │
│  │  (circle)  │   표현하는 작가. 한지, 아크릴, 오일파스텔       │
│  │            │   등 다양한 재료를 겹겹이 쌓아 올리며           │
│  └────────────┘   꽃과 자연의 아름다움을 캔버스에 담아낸다.     │
│                                                              │
│                   "모든 꽃잎에는 시간이 깃들어 있고,            │
│                    모든 색에는 감정이 스며있다."                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| 속성 | 사양 |
|------|------|
| 배경 | `var(--color-bg-alt)` |
| 패딩 | `var(--space-5xl) 0` |
| 레이아웃 | 2컬럼 (이미지 35% + 텍스트 65%), 모바일은 세로 스택 |
| 프로필 이미지 | `border-radius: 50%` 또는 soft rectangle, `--shadow-card` |
| 이름 | `font-heading` `var(--text-h2)`, weight 700 |
| 설명 | `font-body` `var(--text-body)`, `--leading-loose` |
| 인용문 | `font-display` italic, `--color-text-secondary`, 좌측 `--color-accent` 2px 보더 |
| 스크롤 진입 | `whileInView` fade-in-up, 이미지와 텍스트 stagger |

---

### 5.6 Footer

```
┌──────────────────────────────────────────────────────────────┐
│                (배경: --color-teal)                            │
│                                                              │
│        강명순 갤러리                                          │
│        Kang Myung Soon Gallery                               │
│                                                              │
│        ────────────────────                                   │
│                                                              │
│        © 2026 Kang Myung Soon. All rights reserved.          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| 속성 | 사양 |
|------|------|
| 배경 | `var(--color-teal)` |
| 텍스트 | 흰색, 중앙 정렬 |
| 패딩 | `var(--space-3xl) 0` |
| 구분선 | `--color-accent` 50% opacity, 너비 80px |

---

## 6. 데이터 스키마

```javascript
// src/data/artworks.js

/**
 * @typedef {Object} Artwork
 * @property {number}  id           — 고유 ID (1부터 시작)
 * @property {string}  title        — 한글 제목
 * @property {string}  titleEn      — 영문 제목
 * @property {number}  year         — 제작 년도
 * @property {string}  medium       — 재료/매체 (예: "혼합매체 on 캔버스")
 * @property {string}  dimensions   — 크기 (예: "53 × 65 cm")
 * @property {string}  description  — 작품 설명 (2-3문장)
 * @property {string}  image        — 이미지 경로 (예: "/artworks/artwork-1.jpg")
 * @property {boolean} featured     — 히어로 대표작 여부
 */

// 유틸리티 함수:
export function getYears(artworks)     // → [2022, 2023, 2024, 2025] 오름차순, 중복 제거
export function getByYear(artworks, year)  // → 해당 년도 작품 배열 (null이면 전체)
export function getById(artworks, id)      // → 단일 작품 또는 undefined
export function getFeatured(artworks)      // → featured === true인 작품
```

---

## 7. 반응형 브레이크포인트

| 이름 | 너비 | 갤러리 열 | 모달 | 네비게이션 | Hero 텍스트 |
|------|------|----------|------|----------|------------|
| Mobile S | ≤ 480px | 1열 | 풀스크린, 세로 스택 | 햄버거 | 48px |
| Mobile L | 481–640px | 1열 | 풀스크린, 세로 스택 | 햄버거 | 52px |
| Tablet | 641–1024px | 2열 | 90% 너비, 세로 스택 | 햄버거 | 60px |
| Desktop | 1025–1440px | 3열 | 2컬럼, 중앙 모달 | 풀 메뉴 | 72px |
| Wide | ≥ 1441px | 3열 (max-width 제한) | 2컬럼, 중앙 모달 | 풀 메뉴 | 80px |

---

## 8. 애니메이션 사양

| 요소 | 트리거 | 효과 | 시간 | 이징 |
|------|--------|------|------|------|
| Hero 텍스트 | 페이지 로드 | stagger fade-in-up (y:30→0, opacity:0→1) | 0.8s, 간격 0.2s | `easeOut` |
| Hero 배경 | 스크롤 | 패럴랙스 `translateY(scroll*0.3)` | 연속 | linear |
| 네비 배경 | 스크롤 >50px | 투명 → 글래스모피즘 | 0.4s | `ease` |
| 필터 밑줄 | 탭 클릭 | `layoutId` 슬라이드 | spring | `stiffness:400, damping:30` |
| 갤러리 카드 | 뷰포트 진입 | fade-in-up (y:40→0) | 0.6s, stagger 0.1s | `easeOut` |
| 카드 필터 전환 | 탭 클릭 | `AnimatePresence` exit → enter | exit 0.2s, enter 0.4s | `easeOut` |
| 카드 hover | 마우스 진입 | `scale(1.015)` + shadow 확대 + 오버레이 | 0.3s | `ease` |
| 모달 진입 | 카드 클릭 | overlay fade + content scale(0.92→1) | 0.3s / 0.4s | `easeOut` |
| 모달 퇴장 | 닫기 액션 | overlay fade + content scale(1→0.95) | 0.25s | `easeIn` |
| About 섹션 | 뷰포트 진입 | 이미지 + 텍스트 stagger fade-in | 0.7s, 간격 0.15s | `easeOut` |

---

## 9. 접근성 (a11y)

| 요구사항 | 구현 |
|---------|------|
| 이미지 `alt` | 모든 작품 이미지에 `"작품명 — 년도"` 형식의 alt 텍스트 |
| 모달 ARIA | `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"` |
| 키보드 | `ESC` 닫기, `←` `→` 작품 이동, `Tab` 포커스 순환 |
| 포커스 관리 | 모달 오픈 시 닫기 버튼에 포커스, 닫기 시 원래 카드에 포커스 복원 |
| 포커스 트랩 | 모달 내부에서 `Tab` 순환 (외부로 빠져나가지 않음) |
| 색상 대비 | WCAG AA 기준 (4.5:1) — `#2C2420` on `#FAF7F2` = 약 10:1 ✓ |
| 모션 존중 | `prefers-reduced-motion` 미디어 쿼리 — 애니메이션 비활성화 |
| 시맨틱 HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, 단일 `<h1>` |

---

## 10. SEO

| 항목 | 값 |
|------|------|
| `<html lang>` | `ko` |
| `<title>` | `강명순 갤러리 — Kang Myung Soon Gallery` |
| `<meta description>` | `화가 강명순의 공식 온라인 갤러리. 혼합매체 작품을 년도별로 감상하세요.` |
| `<meta charset>` | `UTF-8` |
| `<meta viewport>` | `width=device-width, initial-scale=1.0` |
| Open Graph `og:title` | `강명순 갤러리` |
| Open Graph `og:description` | `화가 강명순의 혼합매체 작품 컬렉션` |
| Open Graph `og:image` | `/artworks/artwork-5.jpg` (대표작) |
| Open Graph `og:type` | `website` |
| 시맨틱 구조 | 단일 `<h1>` (히어로), `<h2>` (섹션 제목), `<h3>` (카드 제목) |
| 이미지 최적화 | `loading="lazy"`, `decoding="async"`, WebP 포맷 권장 |
