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
		// Was { en: 'Developer', id: 'Developer' } — renamed sitewide so the
		// nav reads BUILD · CREATE · LEAD · WHY instead of the job-title set.
		headerLabel: { en: 'Build', id: 'Build' }
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
		// Was { en: 'Leadership', id: 'Leadership' }
		headerLabel: { en: 'Lead', id: 'Lead' }
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
		// Was { en: 'Videographer', id: 'Videografer' }
		headerLabel: { en: 'Create', id: 'Create' }
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
		// Was { en: 'About', id: 'Tentang' }
		headerLabel: { en: 'Why', id: 'Why' }
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
	el.style.setProperty('--accent2', theme.accent2);
	el.style.setProperty('--border', theme.border);
	el.style.setProperty('--font', theme.font);
}

export const roles: Role[] = ['developer', 'leadership', 'videographer'];
