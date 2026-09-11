import type { Role } from "$lib/theme";

export interface Localized {
	en: string;
	id: string;
}

export interface RoleContent {
	role: Role;
	title: Localized;
	subtitle: Localized;
	tag: Localized;
	cta: Localized;
	photo: string;
	photoFlip?: boolean;
}

import { developer } from "./developer";
import { leadership } from "./leadership";
import { videographer } from "./videographer";

export const content: Record<'developer' | 'leadership' | 'videographer', RoleContent> = {
    developer,
    leadership,
    videographer,
}