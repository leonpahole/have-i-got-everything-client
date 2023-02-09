<script lang="ts">
  import { Label } from 'flowbite-svelte';

  export let htmlFor: string | undefined = undefined;
  export let className: string = '';
</script>

<Label for={htmlFor} class="!font-normal block !text-white {className}">
  <slot />
</Label>
