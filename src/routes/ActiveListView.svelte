<script lang="ts">
  import ActiveList from "../components/ActiveList.svelte";
  import { ActiveListService } from "../services/active-list.service";

  export let id: string;
  const activeListPromise = ActiveListService.getActiveListDetail(Number(id));
</script>

{#await activeListPromise}
  <p>...waiting</p>
{:then activeList}
  <div class="wrapper">
    <ActiveList {activeList} />
  </div>
{:catch error}
  <p class="error">{error.message}</p>
{/await}

<style>
  .error {
    color: red;
  }
</style>
