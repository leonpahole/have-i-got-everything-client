<script lang="ts">
  import { Textarea, Label } from 'flowbite-svelte';
  import AppLabel from './AppLabel.svelte';

  export let id: string;
  export let label: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let value;
</script>

{#if label}
  <AppLabel htmlFor={id} className="mb-2">{label}</AppLabel>
{/if}

<Textarea {id} rows={4} {placeholder} bind:value />
