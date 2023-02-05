<script lang="ts">
  import type { SharedModels } from '../../util/shared/shared.models';
  import AppInput from './AppInput.svelte';

  export let values: SharedModels.ListInputItem[] = [];

  let newValue: string = '';
  function onAdd() {
    values = [...values, { name: newValue }];
    newValue = '';
  }

  function onRemove(value: SharedModels.ListInputItem) {
    values = values.filter(v => v !== value);
  }
</script>

<ul class="items-list">
  {#each values as value (value)}
    <li class="items-list-item">
      <div class="button-wrapper">
        <AppInput bind:value={value.name} label="Item Name" />
        <button type="button" on:click={() => onRemove(value)}>
          Remove item
        </button>
      </div>
    </li>
  {/each}

  <li class="items-list-item">
    <div class="button-wrapper">
      <AppInput bind:value={newValue} label="Item Name" />
      <button
        type="button"
        on:click={onAdd}
        disabled={newValue.trim().length === 0}
      >
        Add item
      </button>
    </div>
  </li>
</ul>

<style>
  .items-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .items-list-item {
    margin-top: 0.8rem;
  }

  .button-wrapper {
    display: flex;
    gap: 8px;
    align-items: flex-end;
  }
</style>
