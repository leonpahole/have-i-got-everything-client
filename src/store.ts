import type { User } from "@auth0/auth0-spa-js";
import { writable } from "svelte/store";

export interface Task {
  id: string;
  description: string;
  completed: boolean;
  user: string;
}

export const loggedInUser = writable<User | null | undefined>(undefined);
export const popupOpen = writable(false);
