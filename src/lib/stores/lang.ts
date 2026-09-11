import { writable } from "svelte/store";

export type Lang = 'en' | 'id';

export const lang = writable<Lang>('en');