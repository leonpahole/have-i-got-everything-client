<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import AppButton from './AppButton.svelte';

  const dispatch = createEventDispatcher<{ tryagain: void }>();

  export let message: string;

  function onTryAgainClick() {
    dispatch('tryagain');
  }
</script>

<div class="flex items-center justify-center flex-col">
  <p class="text-red-600 text-xl mb-3">
    An error has occured: {message}.
  </p>
  <AppButton on:click={onTryAgainClick} color="light">Try again</AppButton>
</div>
