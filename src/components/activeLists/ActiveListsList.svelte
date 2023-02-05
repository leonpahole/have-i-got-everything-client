<script lang="ts">
  import { ActiveListService } from "../../util/activeLists/active-list.service";
  import TemplateListItem from "../templates/TemplateListItem.svelte";

  const activeListsPromise = ActiveListService.listActiveLists();
</script>

<h2>Active lists</h2>

{#await activeListsPromise}
  <p>...waiting</p>
{:then lists}
  <div class="wrapper">
    {#each lists as list (list.id)}
      <TemplateListItem name={list.name} link={`list/${list.id}`} />
    {/each}
  </div>
{:catch error}
  <p class="error">{error.message}</p>
{/await}

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    gap: 1rem;
  }

  .error {
    color: red;
  }
</style>
