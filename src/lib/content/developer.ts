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