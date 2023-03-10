import { onMount } from 'svelte';
import { loggedInUser } from '../store';
import { AuthService } from '../util/auth/auth.service';

export default function useSetLoggedInUser() {
  onMount(async () => {
    loggedInUser.set(await AuthService.getUser());
  });
}
