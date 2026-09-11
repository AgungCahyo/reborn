import type { Role } from "$lib/theme";
import { writable } from "svelte/store";

export const activeRole = writable<Role>('leadership')