<script lang="ts">
  import type { ActiveListModels } from '../../util/activeLists/active-list.models';
  import { ActiveListService } from '../../util/activeLists/active-list.service';
  import AppButton from '../shared/AppButton.svelte';
  import { Check } from 'svelte-heros-v2';
  import { Alert, Checkbox, Modal } from 'flowbite-svelte';
  import { useNavigate } from 'svelte-navigator';

  const navigate = useNavigate();

  export let activeList: ActiveListModels.ActiveList;

  async function onItemCheck(e: Event, itemId: number) {
    const checked = (e.target as HTMLInputElement).checked;
    await ActiveListService.checkItem(activeList.id, itemId, checked);
  }

  let isCompleting: boolean = false;
  let error: string | null = null;

  async function onListComplete() {
    try {
      error = null;
      isCompleting = true;
      await ActiveListService.finalizeActiveList(activeList.id);
      navigate('/');
    } catch (e) {
      error = e?.message ?? 'Unknown error';
    } finally {
      isCompleting = false;
    }
  }

  let completeModalOpen: boolean = false;
</script>

<div class="flex flex-wrap gap-3 items-center justify-between mb-6">
  <h1 class="text-4xl font-medium">{activeList.name}</h1>
  <AppButton
    on:click={() => (completeModalOpen = true)}
    icon={Check}
    disabled={isCompleting}>Complete</AppButton
  >
</div>

{#if error != null}
  <div class="mt-6">
    <Alert color="red">
      <span class="font-medium">An error has occured: {error}!</span> Please try
      again.
    </Alert>
  </div>
{/if}

<ul class="mt-3 flex flex-col gap-1">
  {#each activeList.items as item (item.id)}
    <li>
      <Checkbox
        checked={item.checked}
        on:change={e => {
          onItemCheck(e, item.id);
        }}
      >
        <span class="text-white font-normal text-lg">
          {item.name}
        </span>
      </Checkbox>
    </li>
  {/each}
</ul>

<Modal bind:open={completeModalOpen} size="xs" autoclose>
  <div class="text-center">
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
      Are you sure you want to complete this list?
    </h3>
    <AppButton on:click={onListComplete}>Complete</AppButton>
    <AppButton color="alternative">Cancel</AppButton>
  </div>
</Modal>
