# Portfolio Rewrite Plan — React/Next.js → SvelteKit

Tujuan rewrite ini bukan cuma ganti framework — tapi memperbaiki 4 akar
masalah yang bikin versi React-nya overengineered:

1. Tema di-hardcode lewat percabangan `if isX` di komponen, bukan config.
2. Konsep "tema" dimodelin di 4 tempat berbeda yang gak saling tahu.
3. Warna literal ditulis ulang manual di puluhan tempat, gak ada token pusat.
4. Dekorasi (particle, HUD, cursor) dibangun ad-hoc per tema, gak reusable.

Setiap keputusan struktur di bawah ini punya tujuan spesifik melawan salah
satu dari 4 poin itu.

---

## 0. Setup awal

```bash
npx sv create portfolio
# pilih: SvelteKit minimal, TypeScript, ESLint+Prettier (opsional), Tailwind (add-on)
cd portfolio
npm install
```

Tambahan dependency yang kepake:

```bash
npm install -D @sveltejs/adapter-static   # kalau mau full static export
```

Svelte punya transition/animate directive built-in (`transition:fly`,
`animate:flip`) — **jangan install framer-motion setara**. Itu salah satu
sumber bloat di versi React-nya. Motion di Svelte cukup pakai native
`transition:`/`in:`/`out:` + CSS, kecuali ada 1-2 animasi kompleks yang
benar-benar butuh spring physics (baru pertimbangkan `svelte/motion`'s
`spring`/`tweened`, itu sudah built-in juga, gak perlu lib luar).

---

## 1. Struktur folder final

```
src/
  lib/
    theme.ts                  # ← FIX #2 & #3: satu-satunya sumber warna/font/tema
    content/
      developer.ts
      leadership.ts
      videographer.ts
      about.ts
      index.ts                 # re-export + tipe Role
    stores/
      lang.ts                  # writable<'en'|'id'>
      activeRole.ts             # writable<Role> (dipakai homepage + nav)
    i18n/
      t.ts                      # fungsi t(en, id) sederhana, baca dari lang store
    components/
      shared/
        Card.svelte             # ← FIX #4: satu card, variant prop
        SectionLabel.svelte
        CTA.svelte
        Tag.svelte
        CornerTag.svelte
        SkillBars.svelte
        Timeline.svelte
        Nav.svelte
        LanguageToggle.svelte
        RoleHero.svelte         # ← FIX #1: satu hero, dipakai 3 role page
      home/
        TriptychPanel.svelte    # ← FIX #1: satu panel, dipakai 3x di homepage
        DotIndicator.svelte
        BottomStrip.svelte
    utils/
      cx.ts                     # helper gabung className (ganti clsx kalau males install)
  routes/
    +layout.svelte              # nav + lang provider + global meta
    +layout.ts                  # (opsional) load data global kalau perlu
    +page.svelte                 # homepage triptych
    about/
      +page.svelte
    developer/
      +page.svelte
      work-with-me/
        +page.svelte
    leadership/
      +page.svelte
    videographer/
      +page.svelte
  app.css                        # import Tailwind + CSS custom properties dasar
  app.html
static/
  profile.png
  hero.png
  favicon.png
```

**Kenapa foldernya begini:** di React versinya, "tema" itu tersebar di
`LayoutHeader.tsx` (ThemeVariant), `Panel.tsx` (panel.theme), `ThemeColor.tsx`
(THEMES), dan `LanguageSwitcher.tsx` (isBrutalist/isArtisan/isTerminal) — 4
tempat, gak connect. Di Svelte, semua itu jadi **satu file**: `lib/theme.ts`.
Semua komponen lain cuma import dari situ.

---

## 2. `lib/theme.ts` — satu-satunya sumber tema (fix #2 + #3)

```ts
// src/lib/theme.ts
export type Role = 'developer' | 'leadership' | 'videographer' | 'about';

export interface RoleTheme {
	ink: string;
	inkSoft: string;
	inkFaint: string;
	paper: string;
	surface: string;
	accent: string;
	accent2: string;
	border: string;
	font: string; // CSS var name, e.g. 'var(--font-tech)'
	photoFilter: string; // CSS filter string
	cardVariant: 'paper' | 'dot-grid' | 'reel-frame';
	headerLabel: { en: string; id: string };
}

export const themes: Record<Role, RoleTheme> = {
	developer: {
		ink: '#1c2333',
		inkSoft: '#5a6478',
		inkFaint: '#8a95ab',
		paper: '#f5f7fa',
		surface: '#ffffff',
		accent: '#3454a4',
		accent2: '#3fae74',
		border: '#dbe2ec',
		font: 'var(--font-tech)',
		photoFilter: 'grayscale(10%) sepia(28%) hue-rotate(178deg) saturate(1.4)',
		cardVariant: 'dot-grid',
		headerLabel: { en: 'Developer', id: 'Developer' }
	},
	leadership: {
		ink: '#24211b',
		inkSoft: '#6b6357',
		inkFaint: '#a39c8c',
		paper: '#faf6ee',
		surface: '#ffffff',
		accent: '#1f6e52',
		accent2: '#e8a23d',
		border: 'rgba(36,33,27,0.1)',
		font: 'var(--font-display)',
		photoFilter: 'grayscale(8%) sepia(35%) hue-rotate(-6deg) saturate(1.15)',
		cardVariant: 'paper',
		headerLabel: { en: 'Leadership', id: 'Leadership' }
	},
	videographer: {
		ink: '#241d18',
		inkSoft: '#6b5f56',
		inkFaint: '#a89b8d',
		paper: '#f7f3ee',
		surface: '#fffdfa',
		accent: '#c1613f',
		accent2: '#2c5f66',
		border: '#e3d9cd',
		font: 'var(--font-editorial)',
		photoFilter: 'sepia(30%) saturate(1.3) hue-rotate(-10deg)',
		cardVariant: 'reel-frame',
		headerLabel: { en: 'Videographer', id: 'Videografer' }
	},
	about: {
		ink: '#241f1a',
		inkSoft: '#5c5650',
		inkFaint: '#a8a29a',
		paper: '#f5f3f0',
		surface: '#ffffff',
		accent: '#241f1a',
		accent2: '#241f1a',
		border: 'rgba(36,31,26,0.1)',
		font: 'var(--font-heading)',
		photoFilter: 'grayscale(15%) sepia(10%)',
		cardVariant: 'paper',
		headerLabel: { en: 'About', id: 'Tentang' }
	}
};

export function getTheme(role: Role): RoleTheme {
	return themes[role];
}

// Terapkan ke CSS custom properties di root elemen halaman — sekali panggil
// per page, semua child component otomatis ikut lewat var(--ink) dst,
// TANPA prop-drilling warna ke tiap komponen.
export function applyThemeVars(el: HTMLElement, theme: RoleTheme) {
	el.style.setProperty('--ink', theme.ink);
	el.style.setProperty('--ink-soft', theme.inkSoft);
	el.style.setProperty('--ink-faint', theme.inkFaint);
	el.style.setProperty('--paper', theme.paper);
	el.style.setProperty('--surface', theme.surface);
	el.style.setProperty('--accent', theme.accent);
	el.style.setProperty('--accent-2', theme.accent2);
	el.style.setProperty('--border', theme.border);
	el.style.setProperty('--role-font', theme.font);
}
```

Ini yang paling penting bedanya sama versi React: **warna gak lagi ditulis
literal di komponen manapun**. Komponen cuma pakai `var(--ink)`,
`var(--accent)`, dst. Ganti tema = ganti 1 object di file ini. Gak perlu
grep-replace `rgba(255,255,255,X)` di 15 file lagi kayak kemarin.

---

## 3. `lib/content/*.ts` — data per role (terpisah dari tema)

Struktur yang sama dipakai ketiga role, biar `RoleHero.svelte` bisa generic:

```ts
// src/lib/content/leadership.ts
export const leadership = {
  role: 'leadership' as const,
  title: { en: 'Team\nCoordinator', id: 'Koordinator\nTim' },
  subtitle: { en: '...', id: '...' },
  tag: { en: '...', id: '...' },
  cta: { en: 'View Leadership Work', id: 'Lihat Leadership Work' },
  heroQuote: { en: '...', id: '...' },
  stages: [ { icon: '◆', title: {en:'People First', id:'...'}, body: {...} }, ... ],
  proof: [ /* case studies, satu shape yang sama juga dipakai developer/videographer */ ],
};
```

`developer.ts` dan `videographer.ts` ikut shape yang sama (title/subtitle/
tag/cta wajib ada di ketiganya — itu yang dipakai `TriptychPanel` di
homepage). Field tambahan (stages, proof, projects) boleh beda per role,
karena masing-masing dibaca oleh section komponen yang berbeda di halaman
detailnya, bukan di homepage panel.

---

## 4. Komponen inti — daftar file + fungsinya

### `components/home/TriptychPanel.svelte`

**Ganti total `Panel.tsx` (240 baris, 3 percabangan if) jadi 1 komponen.**

```svelte
<script lang="ts">
	export let role: Role;
	export let active: boolean;
	export let content: RoleContent;
	const theme = getTheme(role);
</script>

<a
	href="/{role}"
	class="panel"
	class:active
	style="--ink:{theme.ink}; --paper:{theme.paper}; --accent:{theme.accent}"
>
	<img src={content.photo} style="filter:{theme.photoFilter}" />
	<h2 style="font-family:{theme.font}">{content.title[$lang]}</h2>
	{#if active}
		<p>{content.subtitle[$lang]}</p>
		<a href="/{role}">{content.cta[$lang]} →</a>
	{/if}
</a>
```

Satu file ini gantikan seluruh isCinema/isTerminal/isLeadership branch.
Beda visual antar role murni datang dari `theme` + `content`, bukan dari
kode yang beda.

### `components/shared/Card.svelte`

**Ganti 3 class CSS berbeda (`.dev-card`, `.leadership-card`, `.reel-frame`)
jadi 1 komponen dengan `variant` prop:**

```svelte
<script lang="ts">
	export let variant: 'paper' | 'dot-grid' | 'reel-frame' = 'paper';
	export let tilt = 0;
</script>

<div class="card card--{variant}" style="--tilt:{tilt}deg"><slot /></div>
```

Texture tiap variant didefinisikan sekali di `app.css` (background-image
per `.card--dot-grid`, dst). Semua page pakai komponen yang sama, tinggal
ganti `variant={theme.cardVariant}`.

### `components/shared/RoleHero.svelte`

Hero section generic yang dipakai `/developer`, `/leadership`,
`/videographer` — terima `theme` + `content`, render headline + stats
strip. Perbedaan tipografi (Space Grotesk vs Fraunces vs Bodoni) otomatis
lewat `theme.font`, bukan 3 file page yang masing-masing nulis JSX sendiri
dari nol.

### `components/shared/CTA.svelte`

Satu CTA section (dulu ditulis ulang manual di leadership/developer/
videographer dengan variasi grain+sticker+quote-mark). Terima `theme` +
teks, styling grain/dekorasi jadi CSS di `app.css` per `data-variant`.

### `components/shared/Timeline.svelte`, `SkillBars.svelte`

Port langsung dari versi React (`JourneyTimeline.tsx`, `SkillBars.tsx`),
prop-nya disederhanakan jadi cuma terima `theme` object, bukan 8 warna
terpisah (`dotColor`, `yearColor`, `titleColor`... yang di versi React
dioper manual satu-satu di setiap pemanggilan).

### `components/shared/Nav.svelte`

**Ganti `LayoutHeader.tsx` (240 baris, `homePanels ? homeChrome :
themeStyles[theme]`) jadi satu komponen yang cuma baca `theme` prop.**
Gak ada lagi `homeChrome` terpisah — homepage juga kirim `theme={getTheme(activeRole)}`
persis sama seperti page lain.

### `components/shared/LanguageToggle.svelte`

Baca/tulis `lang` store langsung. Warnanya ikut `var(--accent)` dari
theme context — **gak perlu logic `isBrutalist`/`isArtisan`/`isTerminal`
sendiri** seperti di `LanguageSwitcher.tsx` React (itu salah satu contoh
paling jelas dari masalah #2).

---

## 5. Stores & fungsi util

### `lib/stores/lang.ts`

```ts
import { writable } from 'svelte/store';
export const lang = writable<'en' | 'id'>('en');
```

### `lib/i18n/t.ts`

```ts
import { get } from 'svelte/store';
import { lang } from '$lib/stores/lang';
export function t(en: string, id: string) {
	return get(lang) === 'id' ? id : en;
}
```

Atau, kalau mau reaktif di template tanpa `get()`, cukup pakai `$lang`
langsung di komponen: `{content.title[$lang]}` — **ini keunggulan Svelte
dibanding React Context yang dipakai di `languageContext.tsx`**: gak perlu
provider/consumer boilerplate, store built-in sudah reaktif ke semua
komponen yang subscribe.

### `lib/stores/activeRole.ts`

```ts
import { writable } from 'svelte/store';
import type { Role } from '$lib/theme';
export const activeRole = writable<Role>('leadership');
```

Dipakai homepage (state panel mana yang aktif) + nav (biar warnanya ikut).

### `lib/utils/cx.ts`

```ts
export function cx(...classes: (string | false | undefined)[]) {
	return classes.filter(Boolean).join(' ');
}
```

---

## 6. Routing — 1:1 dengan struktur Next.js lama

| Route                     | File                                         |
| ------------------------- | -------------------------------------------- |
| `/`                       | `routes/+page.svelte`                        |
| `/about`                  | `routes/about/+page.svelte`                  |
| `/developer`              | `routes/developer/+page.svelte`              |
| `/developer/work-with-me` | `routes/developer/work-with-me/+page.svelte` |
| `/leadership`             | `routes/leadership/+page.svelte`             |
| `/videographer`           | `routes/videographer/+page.svelte`           |

`routes/+layout.svelte` isinya: `<Nav />`, slot untuk children, dan
`<svelte:head>` untuk meta tag global (title, favicon, `theme-color` —
langsung reaktif ke `$activeRole` tanpa perlu komponen `ThemeColor.tsx`
terpisah seperti di React).

---

## 7. Urutan pengerjaan (start → finish)

Kerjakan dalam urutan ini — tiap tahap bisa langsung dites jalan sebelum
lanjut ke tahap berikutnya:

1. **Scaffold + `app.css` token dasar** — setup Tailwind, definisikan
   `--font-*` lewat `@font-face`/Google Fonts, definisikan class
   `.card--paper/.card--dot-grid/.card--reel-frame` sekali di sini.
2. **`lib/theme.ts` + `lib/content/*.ts`** — isi semua data dulu sebelum
   nulis UI apapun. Ini fondasi yang bikin semua komponen berikutnya jadi
   generic.
3. **`lib/stores/lang.ts` + `i18n/t.ts`** — dua file kecil, kelar dalam
   5 menit, tapi dipakai di semua tempat.
4. **`Nav.svelte` + `LanguageToggle.svelte` + `routes/+layout.svelte`** —
   biar setiap page yang dibuat sesudah ini otomatis punya nav yang jalan.
5. **`TriptychPanel.svelte` + `routes/+page.svelte`** (homepage) — paling
   sering direfer waktu bikin page lain, kerjakan lebih dulu.
6. **Satu role page penuh sampai jadi** — sarankan mulai dari
   `/leadership` (kontennya paling sedikit dibanding developer yang ada
   3D globe). Bikin `RoleHero.svelte`, `Card.svelte`, `CTA.svelte` di
   tahap ini — ketiganya generic, jadi otomatis kepake lagi di tahap 7.
7. **`/developer` dan `/videographer`** — harusnya cepat karena komponen
   di tahap 6 sudah reusable, kerjaan yang tersisa cuma isi `content/`.
8. **`/about`** — satu-satunya page yang gak pakai 1 tema tunggal (dia
   nyampur 3 aksen), boleh dikerjakan terakhir karena paling custom.
9. **`/developer/work-with-me`** — form/contact page, kerjakan setelah
   `/developer` selesai karena styling-nya turunan dari situ.
10. **Polish**: page transition (`transition:fade` bawaan Svelte di
    `+layout.svelte`), cursor custom (opsional — evaluasi dulu apakah
    beneran nambah value, jangan asal port dari React kalau memang gak
    krusial), meta tag SEO per halaman lewat `<svelte:head>`.
11. **Deploy** — `adapter-static` kalau semua konten statis (kemungkinan
    besar iya untuk portfolio), lalu host di Vercel/Netlify/Cloudflare
    Pages.

---

## 8. Checklist "jangan ulangi kesalahan yang sama"

- [ ] Warna literal (`#xxxxxx`, `rgba(...)`) **hanya boleh muncul di
      `lib/theme.ts`**. Kalau nemu warna literal di file komponen lain,
      itu tanda harus ditarik jadi CSS var.
- [ ] Sebelum bikin komponen baru buat 1 role spesifik, cek dulu apakah
      bisa jadi komponen generic + prop `theme`/`variant`.
- [ ] Sebelum nambah animasi/dekorasi baru, tanya: apakah ini bakal
      dipakai di lebih dari 1 tempat? Kalau iya → primitive reusable di
      `components/shared/`. Kalau cuma sekali pakai dan kecil → boleh
      inline, gak usah dipaksa jadi komponen terpisah juga (over-abstraksi
      itu juga bentuk overengineering).
- [ ] Satu konsep = satu nama di satu tempat. Jangan sampai ada lagi
      situasi `panel.theme === 'terminal'` vs `ThemeVariant === 'blueprint'`
      merujuk hal yang sama dengan nama beda.
