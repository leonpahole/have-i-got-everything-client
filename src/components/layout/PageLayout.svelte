<script lang="ts">
  import Navbar from './Navbar.svelte';

  export let showNavbar: boolean = true;
  export let dontLimitWidth: boolean = false;
</script>

<div class="bg-gray-900 text-white min-h-screen">
  {#if showNavbar}
    <Navbar />
  {/if}
  <main
    class="mx-auto"
    class:px-6={!dontLimitWidth}
    class:py-7={!dontLimitWidth}
    class:max-w-6xl={!dontLimitWidth}
  >
    <slot />
  </main>
</div>
