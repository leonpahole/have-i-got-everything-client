import { onMount } from "svelte";
import auth from "./auth";
import { loggedInUser } from "../store";

export function useSetLoggedInUser() {
  onMount(async () => {
    loggedInUser.set(await auth.getUser());
  });
}
