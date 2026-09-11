// src/lib/content/leadership.ts
import type { RoleContent } from './index';

export const leadership: RoleContent = {
	role: 'leadership',
	title: { en: 'Team\nCoordinator', id: 'Koordinator\nTim' },
	subtitle: {
		en: 'Coordinating teams, training new staff, and keeping beverage operations moving.',
		id: 'Koordinasi tim, training staf baru, dan menjaga operasional beverage tetap jalan.'
	},
	tag: { en: 'SOP · Training · Shift Lead', id: 'SOP · Training · Shift Lead' },
	cta: { en: 'View Leadership Work', id: 'Lihat Leadership Work' },
	photo: '/profile.png',
	photoFlip: false
};

// ── Detail-page-only fields, ported 1:1 from the React version's
// data/beverage.ts — not part of RoleContent since the homepage panel
// never reads these. ──

export const leadershipStats = [
	{ n: { en: 'Team Coordinator', id: 'Koordinator Tim' }, l: { en: 'Role', id: 'Peran' } },
	{ n: { en: 'Staff Training', id: 'Pelatihan Tim' }, l: { en: 'Practice', id: 'Praktik' } },
	{ n: { en: 'SOP Systems', id: 'Sistem SOP' }, l: { en: 'Method', id: 'Metode' } },
	{ n: { en: '5+ Years F&B', id: '5+ Tahun F&B' }, l: { en: 'Context', id: 'Konteks' } }
];

// "The System" section — a real sequence (People → Systems → Execution → Outcome)
export const leadershipStages = [
	{
		icon: '◆',
		title: { en: 'People First', id: 'Orang Dulu' },
		body: {
			en: 'A station is only as strong as the people running it. Training, feedback, and clear ownership come before clever recipes.',
			id: 'Station hanya sekuat orang yang menjalankannya. Pelatihan, umpan balik, dan ownership yang jelas lebih dulu daripada resep yang canggih.'
		}
	},
	{
		icon: '◎',
		title: { en: 'Documented Systems', id: 'Sistem Terdokumentasi' },
		body: {
			en: 'If it is not written down, it cannot be coached. SOP is how quality survives a new hire and a busy Saturday.',
			id: 'Kalau tidak tertulis, tidak bisa dilatih. SOP adalah cara kualitas bertahan saat ada staf baru dan Sabtu yang ramai.'
		}
	},
	{
		icon: '⚖',
		title: { en: 'Calm in Peak Hours', id: 'Tenang di Jam Sibuk' },
		body: {
			en: 'Leadership shows when volume spikes. Short communication, clear roles, and protecting the standard guests already trust.',
			id: 'Leadership terlihat saat volume naik. Komunikasi singkat, peran yang jelas, dan menjaga standar yang sudah dipercaya tamu.'
		}
	},
	{
		icon: '→',
		title: { en: 'Transferable Quality', id: 'Kualitas yang Bisa Dititipkan' },
		body: {
			en: 'If only one person can do it right, the operation is fragile. The job is making the standard reproducible.',
			id: 'Kalau hanya satu orang yang bisa mengerjakannya dengan benar, operasionalnya rapuh. Tugasnya membuat standar itu bisa direproduksi.'
		}
	}
];

// "How I Lead" section — not a sequence, three distinct practices
export const leadershipPractices = [
	{
		title: { en: 'Coach on the floor', id: 'Coach di lantai' },
		body: {
			en: 'Training happens during real service, not only in a briefing. Short corrections, then let people run the station.',
			id: 'Pelatihan terjadi saat layanan nyata, bukan hanya briefing. Koreksi singkat, lalu biarkan orang menjalankan station.'
		}
	},
	{
		title: { en: 'Write the standard once', id: 'Tulis standarnya sekali' },
		body: {
			en: 'Prep, pour, and peak-hour flow live in SOP so quality does not depend on who is on shift.',
			id: 'Prep, pour, dan alur jam sibuk ada di SOP supaya kualitas tidak bergantung siapa yang masuk shift.'
		}
	},
	{
		title: { en: 'Protect the guest during rush', id: 'Lindungi tamu saat ramai' },
		body: {
			en: 'Roles stay clear when volume spikes. Speed is useless if the standard drops.',
			id: 'Peran tetap jelas saat volume naik. Cepat tidak ada artinya kalau standarnya turun.'
		}
	}
];

// "Proof" section — 4 case studies
export const leadershipProof = [
	{
		type: { en: 'Leadership', id: 'Kepemimpinan' },
		title: { en: 'Beverage Training SOP', id: 'SOP Pelatihan Minuman' },
		subtitle: { en: 'Onboarding, coaching, and documented standards', id: 'Onboarding, coaching, dan standar terdokumentasi' },
		body: {
			en: 'Built a repeatable training system so new bar staff could reach service-ready quality faster. Led hands-on sessions, wrote SOPs for prep and peak-hour flow, and cut onboarding from 2 weeks to 4 days without dropping consistency.',
			id: 'Membangun sistem pelatihan yang bisa diulang supaya staf bar baru siap layanan lebih cepat. Memimpin sesi langsung, menyusun SOP prep dan alur jam sibuk, dan memangkas onboarding dari 2 minggu menjadi 4 hari tanpa menurunkan konsistensi.'
		},
		tags: ['Staff Training', 'SOP', 'Coaching', 'Quality Control', 'Documentation']
	},
	{
		type: { en: 'Operations', id: 'Operasional' },
		title: { en: 'Peak-Hour Team Coordination', id: 'Koordinasi Tim Jam Sibuk' },
		subtitle: { en: 'Shift ownership when volume spikes', id: 'Ownership shift saat volume naik' },
		body: {
			en: 'Coordinated beverage teams through high-volume shifts and seasonal menu changes. Assigned roles, kept communication short, and protected speed-of-service without sacrificing the standard guests already expected.',
			id: 'Mengkoordinasikan tim minuman di shift volume tinggi dan saat menu musiman berganti. Membagi peran, menjaga komunikasi singkat, dan melindungi kecepatan layanan tanpa mengorbankan standar yang sudah diharapkan tamu.'
		},
		tags: ['Shift Coordination', 'High-Volume Service', 'Communication', 'Prioritization']
	},
	{
		type: { en: 'Operations', id: 'Operasional' },
		title: { en: 'Menu Ownership & Cost Control', id: 'Ownership Menu & Kontrol Biaya' },
		subtitle: { en: 'Sourcing, costing, and seasonal updates', id: 'Pengadaan, costing, dan pembaruan musiman' },
		body: {
			en: 'Took ownership of beverage menu decisions — sourcing, costing, and seasonal rotation — so the team had a clear offering they could execute at scale.',
			id: 'Memegang keputusan menu minuman — pengadaan, costing, dan rotasi musiman — supaya tim punya offering yang jelas dan bisa dieksekusi dalam skala.'
		},
		tags: ['Menu Engineering', 'Cost Control', 'Inventory', 'Seasonal Planning']
	},
	{
		type: { en: 'Quality Systems', id: 'Sistem Kualitas' },
		title: { en: 'Quality Standard Across Stations', id: 'Standar Kualitas Antar Station' },
		subtitle: { en: 'Consistency the whole team can reproduce', id: 'Konsistensi yang bisa direproduksi seluruh tim' },
		body: {
			en: 'Turned recipe knowledge into team-wide standards: batch prep, garnish, and pour consistency that did not depend on one person being on shift.',
			id: 'Mengubah pengetahuan resep menjadi standar tim: prep massal, garnish, dan konsistensi pour yang tidak bergantung pada satu orang saja yang masuk shift.'
		},
		tags: ['Quality Control', 'Batch Preparation', 'Knowledge Transfer', 'Reproducibility']
	}
];

// "Journey" timeline
export const leadershipJourney = [
	{
		year: '2019',
		phase: { en: 'Foundation', id: 'Fondasi' },
		title: { en: 'Vocational School Graduate — Culinary Arts', id: 'Lulus SMK Tata Boga' },
		body: {
			en: 'Formal culinary & beverage education. Learned hygiene, service standards, and how precision in a kitchen becomes trust on the floor.',
			id: 'Pendidikan formal kuliner dan minuman. Belajar higienitas, standar layanan, dan bagaimana presisi di dapur menjadi kepercayaan di lantai operasional.'
		}
	},
	{
		year: '2020',
		phase: { en: 'Entry', id: 'Awal Karir' },
		title: { en: 'First F&B Role', id: 'Langkah Pertama di Industri F&B' },
		body: {
			en: 'Entered hospitality under pressure. Learned high-volume service, staying consistent when the floor is loud.',
			id: 'Masuk hospitality di bawah tekanan. Belajar layanan volume tinggi, tetap konsisten saat lantai ramai.'
		}
	},
	{
		year: '2021',
		phase: { en: 'Growth', id: 'Pertumbuhan' },
		title: { en: 'From Execution to Coaching', id: 'Dari Eksekusi ke Coaching' },
		body: {
			en: 'Started helping newer staff hit the same standard. The work is not only making the drink — it is making sure the next person can make it the same way.',
			id: 'Mulai membantu staf baru mencapai standar yang sama. Kerjanya bukan hanya meracik — tapi memastikan orang berikutnya bisa mengerjakannya dengan cara yang sama.'
		}
	},
	{
		year: '2022–2023',
		phase: { en: 'Leadership', id: 'Kepemimpinan' },
		title: { en: 'Beverage Team Coordinator', id: 'Koordinator Tim Minuman' },
		body: {
			en: 'Coordinated the beverage team: training, seasonal menu changes, and peak-hour ownership. Cut onboarding from 2 weeks to 4 days.',
			id: 'Mengkoordinasikan tim minuman: pelatihan, perubahan menu musiman, dan ownership jam sibuk. Memangkas onboarding dari 2 minggu menjadi 4 hari.'
		}
	},
	{
		year: '2024–Now',
		phase: { en: 'Multi-Discipline', id: 'Multi-Disiplin' },
		title: { en: 'Lead · Code · Cinema', id: 'Pimpin · Kode · Sinema' },
		body: {
			en: 'The same coordination, documentation, and coaching now sit beside software and film. Leadership is the through-line.',
			id: 'Koordinasi, dokumentasi, dan coaching yang sama sekarang berjalan bersama software dan film. Leadership adalah benang merahnya.'
		}
	}
];

// "Capability" — skill pills by category
export const leadershipSkillGroups = [
	{
		category: { en: 'Leadership', id: 'Kepemimpinan' },
		items: [
			{ en: 'Staff Training', id: 'Pelatihan Tim' },
			{ en: 'Hands-on Coaching', id: 'Coaching Langsung' },
			{ en: 'Shift Coordination', id: 'Koordinasi Shift' },
			{ en: 'Knowledge Transfer', id: 'Transfer Pengetahuan' },
			{ en: 'Calm Under Pressure', id: 'Tenang di Bawah Tekanan' },
			{ en: 'Accountability', id: 'Akuntabilitas' }
		]
	},
	{
		category: { en: 'Operations', id: 'Operasional' },
		items: [
			{ en: 'SOP Development', id: 'Penyusunan SOP' },
			{ en: 'Inventory Management', id: 'Manajemen Stok' },
			{ en: 'Quality Control', id: 'Kontrol Kualitas' },
			{ en: 'Cost Control', id: 'Kontrol Biaya' },
			{ en: 'Speed of Service', id: 'Kecepatan Layanan' },
			{ en: 'Seasonal Planning', id: 'Perencanaan Musiman' }
		]
	},
	{
		category: { en: 'Hospitality', id: 'Hospitality' },
		items: [
			{ en: 'F&B Industry 5+ Years', id: '5+ Tahun di F&B' },
			{ en: 'High-Volume Service', id: 'Layanan Volume Tinggi' },
			{ en: 'Customer Experience', id: 'Pengalaman Pelanggan' },
			{ en: 'Culinary Vocational School', id: 'SMK Tata Boga' },
			{ en: 'Floor Communication', id: 'Komunikasi Lantai' }
		]
	}
];

// "Capability" — technique mastery bars
export const leadershipTechniques = [
	{ name: { en: 'Staff Training', id: 'Pelatihan Tim' }, level: 90, desc: { en: 'Hands-on coaching & onboarding', id: 'Coaching langsung & onboarding' } },
	{ name: { en: 'SOP Development', id: 'Penyusunan SOP' }, level: 88, desc: { en: 'Documented, repeatable workflows', id: 'Alur kerja terdokumentasi & bisa diulang' } },
	{ name: { en: 'Shift Coordination', id: 'Koordinasi Shift' }, level: 86, desc: { en: 'Roles, timing, peak-hour calm', id: 'Peran, timing, ketenangan jam sibuk' } },
	{ name: { en: 'Quality Control', id: 'Kontrol Kualitas' }, level: 88, desc: { en: 'Standards the whole team can hit', id: 'Standar yang bisa dicapai seluruh tim' } },
	{ name: { en: 'Inventory & Costing', id: 'Stok & Costing' }, level: 80, desc: { en: 'Sourcing, waste, menu economics', id: 'Pengadaan, waste, ekonomi menu' } },
	{ name: { en: 'High-Volume Service', id: 'Layanan Volume Tinggi' }, level: 85, desc: { en: 'Speed without dropping the standard', id: 'Cepat tanpa menurunkan standar' } },
	{ name: { en: 'Knowledge Transfer', id: 'Transfer Pengetahuan' }, level: 84, desc: { en: 'Make quality independent of one person', id: 'Kualitas tidak bergantung pada satu orang' } },
	{ name: { en: 'Menu Operations', id: 'Operasional Menu' }, level: 82, desc: { en: 'Seasonal updates the team can execute', id: 'Pembaruan musiman yang bisa dieksekusi tim' } }
];