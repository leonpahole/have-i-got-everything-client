<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { Link } from 'svelte-navigator';

  export let linkHref: string | undefined = undefined;
  export let color: Button['$$prop_def']['color'] | undefined = undefined;
  export let icon: any | undefined = undefined;

  export let className: string = '';
  export let disabled: boolean = false;

  export let type: Button['$$prop_def']['type'] = 'button';

  let defaultClasses = 'gap-2';
</script>

{#if linkHref != null}
  <Link to={linkHref}>
    <Button
      href={linkHref}
      {color}
      {disabled}
      class="{className} {defaultClasses}"
      {type}
    >
      <slot />
      {#if icon}
        <svelte:component this={icon} />
      {/if}
    </Button>
  </Link>
{:else}
  <Button
    on:click
    {color}
    {disabled}
    class="{className} {defaultClasses}"
    {type}
  >
    <slot />
    {#if icon}
      <svelte:component this={icon} />
    {/if}
  </Button>
{/if}
