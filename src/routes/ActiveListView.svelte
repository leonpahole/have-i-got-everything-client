<script lang="ts">
  import { onMount } from 'svelte';
  import ActiveList from '../components/activeLists/ActiveList.svelte';
  import AppCenteredSpinner from '../components/shared/AppCenteredSpinner.svelte';
  import AppErrorMessage from '../components/shared/AppErrorMessage.svelte';
  import { ActiveListService } from '../util/activeLists/active-list.service';

  export let id: string;
  let activeListPromise;
  function tryFetching() {
    activeListPromise = ActiveListService.getActiveListDetail(Number(id));
  }

  onMount(() => {
    tryFetching();
  });
</script>

{#if activeListPromise}
  {#await activeListPromise}
    <AppCenteredSpinner />
  {:then activeList}
    <div class="wrapper">
      <ActiveList {activeList} />
    </div>
  {:catch error}
    <AppErrorMessage message={error.message} on:tryagain={tryFetching} />
  {/await}
{/if}
