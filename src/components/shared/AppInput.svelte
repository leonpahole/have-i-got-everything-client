<script lang="ts">
  import { Input } from 'flowbite-svelte';
  import AppLabel from './AppLabel.svelte';

  export let id: string;
  export let label: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let value;
  export let className: string = '';
</script>

<div class="w-full {className}">
  {#if label}
    <AppLabel htmlFor={id} className="mb-2">{label}</AppLabel>
  {/if}

  <Input {id} size="md" {placeholder} bind:value on:keydown />
</div>
