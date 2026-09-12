// src/lib/content/developer.ts
import type { RoleContent } from './index';

export const developer: RoleContent = {
	role: 'developer',
	title: { en: 'Full-Stack ()\nDeveloper', id: 'Full-Stack\nDeveloper' },
	subtitle: {
		en: 'Building robust, AI-integrated web apps with an eye for design.',
		id: 'Membangun web app yang robust dan AI-ready dengan sense desain yang kuat.'
	},
	tag: { en: 'React · Next.js · TypeScript', id: 'React · Next.js · TypeScript' },
	cta: { en: 'View Engineering Work', id: 'Lihat Engineering Work' },
	photo: '/profile.png',
	photoFlip: true
};

// ── Detail-page-only fields, ported 1:1 from the React version's
// data/developer.ts — not part of RoleContent since the homepage panel
// never reads these. ──

export const developerStats = [
	{ n: { en: '2022–Now', id: '2022–Sekarang' }, l: { en: 'Active', id: 'Aktif' } },
	{ n: { en: '84', id: '84' }, l: { en: 'Automated Tests', id: 'Test Otomatis' } },
	{ n: { en: '90%+', id: '90%+' }, l: { en: 'Coverage', id: 'Cakupan' } },
	{ n: { en: '4+', id: '4+' }, l: { en: 'Apps Shipped', id: 'Aplikasi Rilis' } }
];

// "The System" section — a real sequence, ported from the React
// quickOverview block (Core Strength → Main Focus → Work Style → Best Fit)
export const developerStages = [
	{
		icon: '◆',
		title: { en: 'Ship Useful, Fast', id: 'Ship yang Kepake, Cepat' },
		body: {
			en: 'The core strength is not clever code — it is shipping products that get used, quickly.',
			id: 'Kekuatan utamanya bukan kode yang canggih — tapi nge-ship produk yang benar-benar kepake, cepat.'
		}
	},
	{
		icon: '◎',
		title: { en: 'Problem → Build → Validate', id: 'Problem → Build → Validate' },
		body: {
			en: 'Every project starts from a real problem, gets built as the smallest useful version, then gets validated with real users.',
			id: 'Setiap proyek mulai dari masalah nyata, dibangun jadi versi paling kecil yang berguna, lalu divalidasi ke user asli.'
		}
	},
	{
		icon: '⚖',
		title: { en: 'Pragmatic Quality', id: 'Quality yang Pragmatis' },
		body: {
			en: 'Tests, CI/CD, and error boundaries where they matter — not vanity engineering for its own sake.',
			id: 'Testing, CI/CD, dan error boundary di tempat yang penting — bukan vanity engineering demi gaya-gayaan.'
		}
	},
	{
		icon: '→',
		title: { en: 'Built for 0→1', id: 'Dibangun untuk 0→1' },
		body: {
			en: 'Best fit is 0→1 products and automation-heavy workflows — where one person owning the whole stack is an advantage.',
			id: 'Paling cocok untuk produk 0→1 dan workflow yang berat di otomasi — di mana satu orang pegang seluruh stack justru jadi keuntungan.'
		}
	}
];

// "How I Build" section — not a sequence, three distinct practices
export const developerPractices = [
	{
		title: { en: 'Async-first communication', id: 'Komunikasi async-first' },
		body: {
			en: 'Features get broken into clear scopes, progress shared in short written updates, decisions kept documented so designers, PMs, and engineers stay aligned.',
			id: 'Fitur dipecah jadi scope yang jelas, progres di-update ringkas secara tertulis, keputusan didokumentasikan supaya desainer, PM, dan engineer tetap sinkron.'
		}
	},
	{
		title: { en: 'Review-ready delivery', id: 'Delivery siap review' },
		body: {
			en: 'Small, reviewable increments with explicit trade-offs and risk notes — faster code review, less friction in collaboration.',
			id: 'Increment kecil yang gampang direview, lengkap trade-off dan catatan risiko — code review lebih cepat, kolaborasi lebih minim friksi.'
		}
	},
	{
		title: { en: 'Test what ships', id: 'Test yang beneran di-ship' },
		body: {
			en: 'SkripIn runs 84 automated tests at 90%+ coverage. The shift is from "it works" to "it is engineered" — CI/CD, error boundaries, systematic review.',
			id: 'SkripIn punya 84 automated test dengan cakupan 90%+. Pergeserannya dari "asal jalan" ke "benar-benar dirancang" — CI/CD, error boundary, review sistematis.'
		}
	}
];

// "Proof" section — case studies, ported from data/developer.ts projects
export const developerProof = [
	{
		type: { en: 'Web Application', id: 'Aplikasi Web' },
		title: { en: 'SkripIn', id: 'SkripIn' },
		subtitle: { en: 'AI Script Generator SaaS', id: 'SaaS Generator Skrip Berbasis AI' },
		body: {
			en: 'Designed for creators stuck between inconsistent script quality and slow turnaround. SkripIn turns rough ideas into ready-to-shoot scripts fast, while preserving each brand voice through a structured multi-agent workflow.',
			id: 'Dirancang untuk creator yang terjebak antara kualitas skrip yang nggak konsisten dan proses yang lambat. SkripIn mengubah ide mentah jadi skrip siap produksi lebih cepat, sambil tetap menjaga brand voice lewat workflow multi-agent yang terstruktur.'
		},
		tags: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini', 'OpenAI TTS', 'Jest']
	},
	{
		type: { en: 'Web Application', id: 'Aplikasi Web' },
		title: { en: 'MBTI Compatibility Test', id: 'Tes Kecocokan MBTI' },
		subtitle: { en: 'AI-Powered Relationship Analyzer', id: 'Analisis Hubungan Berbasis AI' },
		body: {
			en: 'Built to solve drop-off in relationship quiz products: users wanted deeper insight, not generic scores. Delivers richer, personalized analysis with automated WhatsApp delivery and a freemium upsell flow.',
			id: 'Dibangun untuk mengatasi drop-off pada produk kuis hubungan: user butuh insight yang lebih dalam, bukan skor generik. Memberi analisis personal yang lebih kaya lewat pengiriman otomatis via WhatsApp dan freemium upsell flow.'
		},
		tags: ['Next.js 16', 'Prisma ORM', 'PostgreSQL', 'Redis', 'Midtrans', 'n8n']
	},
	{
		type: { en: 'Automation', id: 'Otomasi' },
		title: { en: 'Crypto Radar Trading Bot', id: 'Bot Trading Crypto Radar' },
		subtitle: { en: 'Autonomous Pump.fun Signal & Trading Bot', id: 'Bot Trading & Sinyal Pump.fun Otonom' },
		body: {
			en: 'Built to solve one core problem: high-volatility memecoin entries were too slow and emotional. Automates signal detection and execution in real time, then protects downside with layered trailing stops.',
			id: 'Dibangun untuk menyelesaikan satu masalah utama: entry memecoin yang super volatil sering telat dan emosional. Mengotomatiskan deteksi sinyal dan eksekusi real-time, lalu melindungi risiko lewat trailing stop bertingkat.'
		},
		tags: ['Node.js', 'Solana Web3.js', 'Telegraf', 'WebSocket', 'Jupiter API']
	},
	{
		type: { en: 'Mobile App', id: 'Aplikasi Mobile' },
		title: { en: 'HPP Calculator', id: 'Kalkulator HPP' },
		subtitle: { en: 'Cost Price Calculation — Mobile App', id: 'Kalkulator HPP — Aplikasi Mobile' },
		body: {
			en: 'Built for F&B owners who priced products by guesswork and lost margin. Standardizes HPP calculation, gives recommended selling prices, and keeps costing available even when internet is unstable.',
			id: 'Dibangun untuk owner F&B yang sering menentukan harga pakai perkiraan dan akhirnya kehilangan margin. Menstandarkan kalkulasi HPP, memberi rekomendasi harga jual, dan tetap bisa dipakai meski internet tidak stabil.'
		},
		tags: ['React Native', 'Firebase Auth', 'Firestore', 'Firebase Storage']
	}
];

// "Journey" timeline
export const developerJourney = [
	{
		year: '2022',
		phase: { en: 'Start', id: 'Awal' },
		title: { en: 'Self-Taught Foundation', id: 'Belajar dari Nol' },
		body: {
			en: 'Started coding from zero — HTML, CSS, JavaScript, then React. Months on freeCodeCamp, The Odin Project, and small projects. Building real things teaches faster than any course.',
			id: 'Mulai coding dari nol — HTML, CSS, JavaScript, lalu React. Berbulan-bulan bergulat dengan freeCodeCamp, The Odin Project, dan proyek-proyek kecil. Membangun sesuatu yang nyata jauh lebih efektif dari kursus mana pun.'
		}
	},
	{
		year: '2023',
		phase: { en: 'Production', id: 'Produksi' },
		title: { en: 'First Shipped Apps', id: 'Aplikasi Pertama yang Diluncurkan' },
		body: {
			en: 'Shipped HPP Calculator (React Native + Firebase) for real F&B entrepreneurs — the first app used by actual paying users. Validated going from concept to App Store without a team.',
			id: 'Meluncurkan Kalkulator HPP (React Native + Firebase) untuk pelaku usaha F&B nyata — aplikasi pertama yang benar-benar digunakan pengguna berbayar. Membuktikan bisa membawa ide dari konsep hingga App Store, sendirian.'
		}
	},
	{
		year: '2024 Q1',
		phase: { en: 'SaaS', id: 'SaaS' },
		title: { en: 'Full-Stack SaaS Architecture', id: 'Arsitektur SaaS Full-Stack' },
		body: {
			en: 'Built MBTI Compatibility Test as a freemium SaaS — Prisma ORM, PostgreSQL, Redis, Midtrans, n8n WhatsApp delivery. First time designing a complete monetization and data architecture.',
			id: 'Membangun Tes Kecocokan MBTI sebagai SaaS freemium — Prisma ORM, PostgreSQL, Redis, Midtrans, pengiriman via WhatsApp dengan n8n. Pertama kali merancang arsitektur monetisasi dan data secara menyeluruh.'
		}
	},
	{
		year: '2024 Q2',
		phase: { en: 'AI', id: 'AI' },
		title: { en: 'AI Engineering & Automation', id: 'Rekayasa AI & Otomasi' },
		body: {
			en: 'Integrated Google Gemini and OpenAI into production apps. Built a WhatsApp AI chatbot with voice-note STT, per-user memory, and rate limiting. AI became an engineering primitive, not a gimmick.',
			id: 'Mengintegrasikan Google Gemini dan OpenAI ke aplikasi produksi. Membangun chatbot AI WhatsApp dengan STT pesan suara, memori per pengguna, dan rate limiting. AI mulai diperlakukan sebagai komponen teknik, bukan sekadar fitur pemanis.'
		}
	},
	{
		year: '2024 Q3–Now',
		phase: { en: 'Quality', id: 'Kualitas' },
		title: { en: 'Test-Driven, Production-Grade', id: 'Berbasis Tes, Standar Produksi' },
		body: {
			en: 'SkripIn: 84 automated tests, 90%+ coverage, 4-agent AI workflow, OpenAI TTS, teleprompter. Shifted from "it works" to "it is engineered".',
			id: 'SkripIn: 84 automated test, cakupan 90%+, alur 4 agen AI, OpenAI TTS, teleprompter. Pergeseran dari "asal jalan" ke "benar-benar dirancang".'
		}
	}
];

// "Capability" — skill pills by category, ported from techStack
export const developerSkillGroups = [
	{
		category: { en: 'Frontend', id: 'Frontend' },
		items: [
			{ en: 'React', id: 'React' },
			{ en: 'Next.js', id: 'Next.js' },
			{ en: 'TypeScript', id: 'TypeScript' },
			{ en: 'Tailwind CSS', id: 'Tailwind CSS' },
			{ en: 'React Native', id: 'React Native' }
		]
	},
	{
		category: { en: 'Backend', id: 'Backend' },
		items: [
			{ en: 'Node.js', id: 'Node.js' },
			{ en: 'PostgreSQL', id: 'PostgreSQL' },
			{ en: 'Firebase', id: 'Firebase' },
			{ en: 'Prisma ORM', id: 'Prisma ORM' },
			{ en: 'Redis', id: 'Redis' }
		]
	},
	{
		category: { en: 'AI & Automation', id: 'AI & Otomasi' },
		items: [
			{ en: 'Google Gemini', id: 'Google Gemini' },
			{ en: 'OpenAI', id: 'OpenAI' },
			{ en: 'n8n', id: 'n8n' },
			{ en: 'LangChain', id: 'LangChain' },
			{ en: 'Jest', id: 'Jest' }
		]
	}
];

// "Capability" — proficiency bars, ported from devSkills
export const developerTechniques = [
	{ name: { en: 'React / Next.js', id: 'React / Next.js' }, level: 92, desc: { en: 'Component systems, SSR/SSG, route architecture', id: 'Sistem komponen, SSR/SSG, arsitektur route' } },
	{ name: { en: 'TypeScript', id: 'TypeScript' }, level: 88, desc: { en: 'Type-safe architecture across the stack', id: 'Arsitektur type-safe di seluruh stack' } },
	{ name: { en: 'Node.js / API Design', id: 'Node.js / Desain API' }, level: 85, desc: { en: 'Production-grade services and integrations', id: 'Layanan dan integrasi standar produksi' } },
	{ name: { en: 'PostgreSQL / Prisma', id: 'PostgreSQL / Prisma' }, level: 82, desc: { en: 'Schema-driven, type-safe data access', id: 'Akses data type-safe berbasis skema' } },
	{ name: { en: 'AI Integration', id: 'Integrasi AI' }, level: 87, desc: { en: 'Gemini, OpenAI, and LLM workflow orchestration', id: 'Gemini, OpenAI, dan orkestrasi workflow LLM' } },
	{ name: { en: 'n8n Automation', id: 'Otomasi n8n' }, level: 90, desc: { en: 'Workflow automation for WhatsApp and ops', id: 'Otomasi workflow untuk WhatsApp dan operasional' } },
	{ name: { en: 'Testing (Jest)', id: 'Testing (Jest)' }, level: 85, desc: { en: 'Automated tests, 90%+ coverage on shipped apps', id: 'Automated test, cakupan 90%+ di aplikasi produksi' } },
	{ name: { en: 'React Native', id: 'React Native' }, level: 78, desc: { en: 'Cross-platform mobile with shared React patterns', id: 'Mobile cross-platform dengan pola React yang sama' } }
];
