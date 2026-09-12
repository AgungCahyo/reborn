// src/lib/content/videographer.ts
import type { RoleContent } from './index';

export const videographer: RoleContent = {
	role: 'videographer',
	title: { en: 'Videographer\n& Editor', id: 'Videographer\n& Editor' },
	subtitle: {
		en: 'Cinematic storytelling — corporate, documentary & brand film.',
		id: 'Cinematic storytelling - corporate, documentary, dan brand film.'
	},
	tag: { en: '4K · Premiere Pro · DaVinci Resolve', id: '4K · Premiere Pro · DaVinci Resolve' },
	cta: { en: 'View Visual Work', id: 'Lihat Visual Work' },
	photo: '/profile2.png',
	photoFlip: false
};

// ── Detail-page-only fields, ported 1:1 from the React version's
// data/videographer.ts — not part of RoleContent since the homepage panel
// never reads these. ──

export const videographerStats = [
	{ n: { en: '2021', id: '2021' }, l: { en: 'Since', id: 'Sejak' } },
	{ n: { en: '15+', id: '15+' }, l: { en: 'Projects', id: 'Proyek' } },
	{ n: { en: '4K', id: '4K' }, l: { en: 'Resolution', id: 'Resolusi' } },
	{ n: { en: '100%', id: '100%' }, l: { en: 'Self-Funded', id: 'Swadaya' } }
];

// "Approach" section — three editing philosophies, ported from
// data/videographer.ts's `philosophy` array. Only 3 exist in the source,
// so (unlike /leadership and /developer) this page has no separate
// 4-card "System" section — three is what the source content supports.
export const videographerPractices = [
	{
		title: { en: 'Story above all', id: 'Cerita di atas segalanya' },
		body: {
			en: 'A 4K resolution means nothing if the narrative does not move the audience. The gear serves the story, never the other way around.',
			id: 'Resolusi 4K tidak berarti apa-apa jika narasinya tidak menggerakkan penonton. Alat ada untuk melayani cerita, bukan sebaliknya.'
		}
	},
	{
		title: { en: 'Invisible editing', id: 'Editing yang tak terasa' },
		body: {
			en: 'The best cuts are the ones the viewer never notices. Pacing and rhythm should feel biological — matching a heartbeat or a breath.',
			id: 'Potongan terbaik adalah yang tidak pernah disadari penonton. Tempo dan ritme harus terasa alami — selaras dengan detak jantung atau tarikan napas.'
		}
	},
	{
		title: { en: 'Color is emotion', id: 'Warna adalah emosi' },
		body: {
			en: 'Grading is more than fixing white balance. It is painting the emotional temperature of the scene.',
			id: 'Color grading bukan sekadar memperbaiki white balance. Ini tentang melukis suhu emosional dari sebuah adegan.'
		}
	}
];

// "Selected Work" — case studies, ported from data/videographer.ts projects
export const videographerProof = [
	{
		type: { en: 'Personal Project', id: 'Proyek Pribadi' },
		title: { en: 'Picnic 2024', id: 'Piknik 2024' },
		subtitle: { en: 'Color Grading · Sound Design', id: 'Color Grading · Sound Design' },
		body: {
			en: 'A video capturing a picnic outing in 2024, made just for fun.',
			id: 'Video yang menangkap momen piknik di tahun 2024, dibuat untuk hobi.'
		},
		tags: ['Color Grading', 'Sound Design'],
		link: 'https://youtu.be/ChtPLCgy_vo'
	},
	{
		type: { en: 'Personal Project', id: 'Proyek Pribadi' },
		title: { en: 'Family Time', id: 'Waktu Bersama Keluarga' },
		subtitle: { en: 'Directing · Color Grading', id: 'Directing · Color Grading' },
		body: {
			en: 'A short video made for fun, capturing simple, warm moments of quality time with family.',
			id: 'Video singkat yang dibuat untuk hobi, menangkap momen-momen hangat dan sederhana saat menghabiskan waktu bersama keluarga.'
		},
		tags: ['Directing', 'Color Grading', 'Family'],
		link: 'https://youtu.be/IGgQigrSOGE'
	},
	{
		type: { en: 'Personal Project', id: 'Proyek Pribadi' },
		title: { en: 'Independence Day Carnival — Bandungrejo', id: 'Karnaval 17 Agustus — Bandungrejo' },
		subtitle: { en: 'Event Coverage · Run-and-gun', id: 'Event Coverage · Run-and-gun' },
		body: {
			en: 'Footage from an Independence Day carnival parade in Bandungrejo village, shot just for fun to capture the lively atmosphere of the celebration.',
			id: 'Rekaman dari pawai karnaval 17 Agustusan di Desa Bandungrejo, diambil untuk hobi guna menangkap suasana ramai perayaan tersebut.'
		},
		tags: ['Event Coverage', 'Run-and-gun', 'Sound Design'],
		link: 'https://youtu.be/sNEY6BpiXko'
	},
	{
		type: { en: 'Personal Project', id: 'Proyek Pribadi' },
		title: { en: 'Graduation Day — SDN 2 Gajah', id: 'Hari Kelulusan — SDN 2 Gajah' },
		subtitle: { en: 'Documentary · Color Grading', id: 'Documentary · Color Grading' },
		body: {
			en: 'An aftermovie made for fun, documenting the graduation ceremony at SDN 2 Gajah elementary school and the key moments of the day.',
			id: 'Aftermovie yang dibuat untuk hobi, mendokumentasikan acara kelulusan di SDN 2 Gajah beserta momen-momen penting di hari itu.'
		},
		tags: ['Documentary', 'Color Grading', 'School Event'],
		link: 'https://youtu.be/CJWyWw1W8CU'
	}
];

// "Creative Journey" timeline
export const videographerJourney = [
	{
		year: '2021',
		phase: { en: 'Foundation', id: 'Fondasi' },
		title: { en: 'Starting Simple', id: 'Mulai dari yang Sederhana' },
		body: {
			en: 'Started editing casual clips just for fun, learning the basics of cutting and timing with free mobile apps.',
			id: 'Mulai mengedit klip-klip kasual untuk hobi, belajar dasar-dasar cutting dan timing pakai aplikasi gratis di HP.'
		}
	},
	{
		year: '2022',
		phase: { en: 'Discovery', id: 'Penemuan' },
		title: { en: 'Found My Tool: CapCut', id: 'Menemukan CapCut' },
		body: {
			en: 'Switched to CapCut and started exploring transitions, captions, and simple music syncing — making editing more fun and a lot easier.',
			id: 'Beralih ke CapCut dan mulai eksplorasi transisi, caption, dan sinkronisasi musik sederhana — bikin editing jadi lebih seru dan jauh lebih mudah.'
		}
	},
	{
		year: '2023',
		phase: { en: 'Practice', id: 'Latihan' },
		title: { en: 'Capturing Real Moments', id: 'Menangkap Momen Nyata' },
		body: {
			en: 'Started editing aftermovies for real moments around me — a family gathering, a village carnival, a school graduation — turning raw clips into something worth rewatching.',
			id: 'Mulai mengedit aftermovie dari momen-momen nyata di sekitar — kumpul keluarga, karnaval desa, hingga acara kelulusan sekolah — mengubah klip mentah jadi sesuatu yang enak ditonton ulang.'
		}
	},
	{
		year: '2024–Now',
		phase: { en: 'Present', id: 'Sekarang' },
		title: { en: 'Still Just for Fun', id: 'Masih Sekadar Hobi' },
		body: {
			en: 'Still treat this purely as a hobby, experimenting with pacing, captions, and music choices whenever there is free time between coding projects.',
			id: 'Masih murni jadi hobi, eksperimen dengan tempo, caption, dan pilihan musik kalau ada waktu kosong di antara proyek coding.'
		}
	}
];

// "Technical Arsenal" — skill pills by category, grouped from videoTech's `cat`
export const videographerSkillGroups = [
	{
		category: { en: 'Editing', id: 'Editing' },
		items: [
			{ en: 'CapCut', id: 'CapCut' },
			{ en: 'Transitions & Effects', id: 'Transisi & Efek' },
			{ en: 'Captions & Subtitles', id: 'Caption & Subtitle' },
			{ en: 'Basic Color Grading', id: 'Color Grading Dasar' }
		]
	},
	{
		category: { en: 'Audio', id: 'Audio' },
		items: [{ en: 'Music & Audio Sync', id: 'Musik & Sinkronisasi Audio' }]
	}
];

// "Technical Arsenal" — proficiency bars, ported from videoTech
export const videographerTechniques = [
	{ name: { en: 'Video Cutting & Trimming (CapCut)', id: 'Cutting & Trimming (CapCut)' }, level: 85, desc: { en: 'Fast, clean edits from raw footage', id: 'Edit cepat dan rapi dari footage mentah' } },
	{ name: { en: 'Captions & Subtitles', id: 'Caption & Subtitle' }, level: 75, desc: { en: 'Readable, well-timed on-screen text', id: 'Teks di layar yang jelas dan pas timing-nya' } },
	{ name: { en: 'Transitions & Effects', id: 'Transisi & Efek' }, level: 70, desc: { en: 'Used to serve pacing, not decoration', id: 'Dipakai untuk pacing, bukan sekadar hiasan' } },
	{ name: { en: 'Background Music & Audio Sync', id: 'Musik & Sinkronisasi Audio' }, level: 65, desc: { en: 'Matching mood and rhythm to the cut', id: 'Menyesuaikan mood dan ritme dengan potongan' } },
	{ name: { en: 'Basic Color Adjustment', id: 'Color Grading Dasar' }, level: 60, desc: { en: 'Setting the emotional temperature of a scene', id: 'Menentukan suhu emosional sebuah adegan' } }
];
