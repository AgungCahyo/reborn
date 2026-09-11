import { lang } from "$lib/stores/lang";
import { derived } from "svelte/store";

export const t = derived(lang, ($lang) => {
    return (en: string, id: string) => ($lang === 'id' ? id : en);
})