<script lang="ts">
  import { createPopperActions } from 'svelte-popperjs';
  import { fade } from 'svelte/transition';
  import clickOutside from '../../lib/clickOutside.js';

  export let padding: {
    right?: number;
    left?: number;
    top?: number;
    bottom?: number;
  } = {};

  const [popperRef, popperContent] = createPopperActions({
    placement: 'bottom',
    strategy: 'fixed'
  });

  const extraOpts = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      },
      {
        name: 'preventOverflow',
        options: {
          padding
        }
      }
    ]
  };

  let showMenu = false;
</script>

<button use:popperRef on:click={() => (showMenu = !showMenu)} class="btn">
  <slot name="button" />
</button>

{#if showMenu}
  <div
    id="tooltip"
    use:popperContent={extraOpts}
    transition:fade={{ duration: 200 }}
    class="content"
    use:clickOutside
    on:click_outside={() => (showMenu = false)}
  >
    <slot name="content" />
  </div>
{/if}

<style lang="scss">
  @use '../../styles/variables.scss';

  .btn {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  .content {
    background-color: transparent;
  }
</style>
