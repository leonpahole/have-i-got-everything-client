<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import AppButton from './AppButton.svelte';
  import type { ItemListItemData } from './ItemList.svelte';

  export let data: ItemListItemData;
</script>

<div class="card-wrapper">
  <Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
      {data.name}
    </h5>
    {#if data.description}
      <p class="mb-3 font-normal text-gray-400 whitespace-pre-line">
        {data.description}
      </p>
    {/if}
    <div class="flex flex-col gap-2">
      {#each data.links as link}
        <AppButton
          linkHref={link.href}
          icon={link.icon}
          color={link.btnColor}
          className="w-full"
        >
          {link.name}
        </AppButton>
      {/each}
    </div>
  </Card>
</div>

<style>
  .card-wrapper > :global(div) {
    background-color: theme('colors.gray.800');
    border-color: theme('colors.gray.700');
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: unset;
  }
</style>
