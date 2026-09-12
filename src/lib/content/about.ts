// src/lib/content/about.ts
import type { RoleContent } from './index';

export const about: RoleContent = {
    role: 'about',
    title: { en: 'Why', id: 'Why' },
    subtitle: {
        en: 'A portfolio built around three ways of making things.',
        id: 'Sebuah portofolio yang dibangun di atas tiga cara membuat sesuatu.'
    },
    tag: { en: 'Code · Cinema · Craft', id: 'Code · Cinema · Craft' },
    cta: { en: 'Why these three', id: 'Kenapa tiga hal ini' },
    photo: '/profile.png',
    photoFlip: false
};

// ── Detail-page-only fields — not part of RoleContent since the homepage
// panel never reads these. ──

// Manifesto — the main section. This is the "WHY" itself, not a bio.
export const aboutManifesto = {
    heading: {
        en: "This portfolio wasn't built to fit\ninto a single job title.",
        id: 'Portofolio ini nggak dibangun\nuntuk masuk ke satu job title aja.'
    },
    intro: {
        en: 'I work across code, visual storytelling, and the systems behind people and process.',
        id: 'Saya kerja lintas code, visual storytelling, dan sistem di balik orang dan proses.'
    },
    pillars: [
        {
            label: { en: 'Build', id: 'Build' },
            body: { en: 'I like turning problems into systems.', id: 'Saya suka mengubah masalah jadi sistem.' }
        },
        {
            label: { en: 'Create', id: 'Create' },
            body: { en: 'I like turning moments into stories.', id: 'Saya suka mengubah momen jadi cerita.' }
        },
        {
            label: { en: 'Lead', id: 'Lead' },
            body: {
                en: 'I like making things work even when the pressure is high.',
                id: 'Saya suka bikin sesuatu tetap jalan meski tekanannya tinggi.'
            }
        }
    ],
    closingLine: { en: 'Three disciplines.\nOne way of working.', id: 'Tiga disiplin.\nSatu cara kerja.' },
    process: [
        { en: 'Observe', id: 'Amati' },
        { en: 'Build', id: 'Bangun' },
        { en: 'Document', id: 'Dokumentasikan' },
        { en: 'Improve', id: 'Perbaiki' }
    ]
};

// "What I hold onto" — values, ported 1:1 from data/about.ts
export const aboutValues = [
    {
        num: '01',
        title: { en: 'Precision', id: 'Presisi' },
        body: {
            en: 'Every gram in a recipe. Every pixel in a layout. Every test in a codebase. The details others skip are where quality lives.',
            id: 'Tiap gram dalam resep. Tiap pixel dalam layout. Tiap test dalam codebase. Yang sering dilewat orang lain — biasanya di situ bedanya.'
        }
    },
    {
        num: '02',
        title: { en: 'Intentionality', id: 'Ada Tujuannya' },
        body: {
            en: 'Nothing ships without a reason. If I cannot articulate why something exists, it does not exist.',
            id: 'Kalau nggak bisa jelasin kenapa sesuatu perlu ada, berarti memang nggak perlu dibuat. Sesederhana itu.'
        }
    },
    {
        num: '03',
        title: { en: 'Cross-Pollination', id: 'Lintas Bidang' },
        body: {
            en: 'A beverage technique inspiring a UX pattern. A filmmaking principle shaping an API. The best ideas live at the intersection.',
            id: 'Cara meracik minuman bisa jadi inspirasi UX. Prinsip filmmaking bisa bentuk desain API. Ide terbaik hampir selalu datang dari tempat yang nggak terduga.'
        }
    },
    {
        num: '04',
        title: { en: 'Craft Over Speed', id: 'Kualitas Dulu' },
        body: {
            en: 'Extraordinary late beats mediocre on time. Quality is the one variable I refuse to negotiate.',
            id: 'Lebih pilih terlambat tapi luar biasa daripada tepat waktu tapi biasa-biasa. Kualitas nggak masuk daftar hal yang bisa dikompromiin.'
        }
    }
];

// "Journey" timeline — ported 1:1 from data/about.ts, reshaped to fit
// Timeline.svelte's {year, phase, title, body} shape (its `tag` field
// doubles as `phase` here — CRAFT/CINEMA/CODE/ALL, the non-linear path
// this plan's intro calls out: F&B → coordinator → factory → coding → video).
export const aboutTimeline = [
    {
        year: '2019',
        phase: { en: 'Craft', id: 'Craft' },
        title: { en: 'Culinary Vocational School', id: 'SMK Tata Boga' },
        body: {
            en: 'Formal education in culinary arts and F&B service. First encounter with precision measurement, flavor science, and high-pressure hospitality.',
            id: 'Awal mula belajar dunia kuliner secara serius. Di sini pertama kali ngerti kenapa ukuran harus presisi, rasa bisa dipelajari, dan kerja di bawah tekanan itu bisa jadi kebiasaan.'
        }
    },
    {
        year: '2020',
        phase: { en: 'Craft', id: 'Craft' },
        title: { en: 'F&B Industry Entry', id: 'Masuk Industri F&B' },
        body: {
            en: 'First professional role. Learned volume service, consistency under pressure, and what it means to own a craft in a commercial environment.',
            id: 'Pertama kali kerja beneran di industri. Belajar bahwa konsistensi bukan soal mood — dan kalau mau nguasain sesuatu, lingkungan komersial adalah guru yang paling jujur.'
        }
    },
    {
        year: '2021',
        phase: { en: 'Cinema', id: 'Sinema' },
        title: { en: 'Filmmaking Discovered', id: 'Ketemu Dunia Film' },
        body: {
            en: 'Started editing and shooting. Learned that the cut is where the story is rewritten. Rhythm, pacing, continuity — the psychology of moving images.',
            id: 'Mulai iseng belajar editing, terus nggak bisa berhenti. Nyadar bahwa cerita yang bagus bukan cuma soal apa yang direkam — tapi gimana cara motongnya.'
        }
    },
    {
        year: '2022',
        phase: { en: 'Code', id: 'Code' },
        title: { en: 'First Line of Code', id: 'Baris Kode Pertama' },
        body: {
            en: 'Started from zero. HTML, CSS, JS, React. Self-taught across every resource available. Realized that shipping real things teaches faster than any course.',
            id: 'Nol besar. Nggak ada background IT, nggak ada mentor. Tapi makin ke sini makin sadar — cara paling cepat belajar coding adalah langsung bikin sesuatu yang nyata.'
        }
    },
    {
        year: '2023',
        phase: { en: 'Code', id: 'Code' },
        title: { en: 'First Shipped Product', id: 'Produk Pertama Naik' },
        body: {
            en: 'HPP Calculator — a React Native app for F&B entrepreneurs. First product used by real paying users. Code met craft for the first time.',
            id: 'Kalkulator HPP — aplikasi React Native buat pelaku usaha F&B. Pertama kalinya ada orang yang bayar buat pakai sesuatu yang gue bikin. Dua dunia akhirnya ketemu.'
        }
    },
    {
        year: '2024–Now',
        phase: { en: 'All', id: 'Semua' },
        title: { en: 'The Convergence', id: 'Titik Temu' },
        body: {
            en: 'Operating simultaneously across all three disciplines. Each craft bleeds into the others. This is not three careers — it is one obsession with different outputs.',
            id: 'Ketiganya jalan bareng. Dan ternyata nggak berantakan — justru saling nguatin. Ini bukan tiga karir, ini satu cara pikir yang punya banyak bentuk.'
        }
    }
];

// "Off the clock" — small personal-touch pills, ported from data/about.ts
export const aboutOffwork = [
    { en: 'Third-wave coffee', id: 'Kopi third-wave' },
    { en: 'Reading on system design', id: 'Baca soal system design' },
    { en: 'Film scores & soundtracks', id: 'Film score & soundtrack' },
    { en: 'Street photography', id: 'Street photography' },
    { en: 'Thinking in systems', id: 'Mikir dalam sistem' }
];

// "Availability" — ported from data/about.ts
export const aboutAvailability = [
    { role: { en: 'Freelance Development', id: 'Freelance Development' }, status: { en: 'Available', id: 'Tersedia' }, open: true },
    { role: { en: 'Video & Editing Projects', id: 'Proyek Video & Editing' }, status: { en: 'By Request', id: 'Sesuai Permintaan' }, open: false },
    { role: { en: 'Full-time Roles', id: 'Posisi Full-time' }, status: { en: 'Open to Talk', id: 'Terbuka Diskusi' }, open: true }
];
