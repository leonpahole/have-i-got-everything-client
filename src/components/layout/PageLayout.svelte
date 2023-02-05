<script lang="ts">
  import Navbar from './Navbar.svelte';

  export let showNavbar: boolean = true;
</script>

<div>
  {#if showNavbar}
    <Navbar />
  {/if}
  <main class="main">
    <slot />
  </main>
</div>

<style>
  .main {
    max-width: 1280px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2rem;
    padding-top: 0;
  }
</style>
