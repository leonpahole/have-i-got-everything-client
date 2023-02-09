<script lang="ts" context="module">
  import type { Button } from 'flowbite-svelte';

  interface LinkItem {
    name: string;
    icon?: any;
    btnColor?: Button['$$prop_def']['color'];
    href: string;
  }
  export interface ItemListData {
    heading: string;
    headingLink: LinkItem | undefined;
    fetchItems: () => Promise<ItemListItemData[]>;
  }

  export interface ItemListItemData {
    name: string;
    description?: string;
    links: LinkItem[];
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import AppButton from './AppButton.svelte';
  import AppCenteredSpinner from './AppCenteredSpinner.svelte';
  import AppErrorMessage from './AppErrorMessage.svelte';
  import ItemListItem from './ItemListItem.svelte';

  let fetchPromise;
  function tryFetchingItems() {
    fetchPromise = data.fetchItems();
  }

  onMount(() => {
    tryFetchingItems();
  });

  export let data: ItemListData;
</script>

{#if fetchPromise}
  <div class="flex flex-wrap gap-3 justify-between items-center mb-5">
    <h2 class="text-4xl font-medium">{data.heading}</h2>

    {#if data.headingLink}
      <AppButton linkHref={data.headingLink.href}>
        {data.headingLink.name}
      </AppButton>
    {/if}
  </div>

  {#await fetchPromise}
    <AppCenteredSpinner />
  {:then items}
    {#if items.length === 0}
      <div class="flex justify-center items-center">
        <p class="text-gray-400">No items at the moment.</p>
      </div>
    {:else}
      <div class="grid items-center gap-5 auto-rows-1fr-full list-wrapper">
        {#each items as item}
          <ItemListItem data={item} />
        {/each}
      </div>
    {/if}
  {:catch error}
    <AppErrorMessage message={error.message} on:tryagain={tryFetchingItems} />
  {/await}
{/if}

<style>
  .list-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
</style>
