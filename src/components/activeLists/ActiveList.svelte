<script lang="ts">
  import type { ActiveListModels } from '../../util/activeLists/active-list.models';
  import { ActiveListService } from '../../util/activeLists/active-list.service';

  export let activeList: ActiveListModels.ActiveList;

  async function onItemCheck(e: Event, itemId: number) {
    const checked = (e.target as HTMLInputElement).checked;
    await ActiveListService.checkItem(activeList.id, itemId, checked);
  }

  async function onListComplete() {
    await ActiveListService.finalizeActiveList(activeList.id);
  }
</script>

<h1>{activeList.name}</h1>

<ul>
  {#each activeList.items as item (item.id)}
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          on:change={e => {
            onItemCheck(e, item.id);
          }}
        />
        {item.name}
      </label>
    </li>
  {/each}
</ul>

<button type="button" on:click={onListComplete}>Complete</button>
