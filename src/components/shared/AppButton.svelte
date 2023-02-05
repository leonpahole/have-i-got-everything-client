<script lang="ts">
  import { link } from 'svelte-navigator';

  export let linkHref: string | undefined = undefined;
</script>

{#if linkHref != null}
  <a href="/" class="btn" use:link>
    <slot />
  </a>
{:else}
  <button class="btn" on:click>
    <slot />
  </button>
{/if}

<style lang="scss">
  @use '../../styles/variables.scss';

  .btn,
  .btn > :global(a) {
    border: none;
    text-decoration: none;
    background-color: variables.$color-3;

    font-size: 1rem;
    font-weight: 500;

    padding: 0.8em 1.5em;
    border-radius: 1.5em;

    font-family: inherit;
    cursor: pointer;
    display: inline-block;
    width: auto;
  }
</style>
