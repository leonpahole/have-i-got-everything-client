<script lang="ts">
  import { Label } from 'flowbite-svelte';
  import { SharedModels } from '../../util/shared/shared.models';
  import AppButton from './AppButton.svelte';
  import AppInput from './AppInput.svelte';
  import { Plus, Trash } from 'svelte-heros-v2';
  import AppLabel from './AppLabel.svelte';

  export let label: string;
  export let values: SharedModels.ListInputItem[] = [];

  let newValue: string = '';

  $: newValueValid = SharedModels.isListInputItemValid({ name: newValue });

  function onAdd() {
    if (!newValueValid) {
      return;
    }
    values = [...values, { name: newValue }];
    newValue = '';
  }

  function onRemove(value: SharedModels.ListInputItem) {
    values = values.filter(v => v !== value);
  }
</script>

<fieldset>
  <AppLabel className="mb-2">
    {label}
  </AppLabel>

  <ul class="flex flex-col gap-3">
    {#each values as value, i (value)}
      <li>
        <div class="flex gap-2">
          <AppInput id="item-{i}" bind:value={value.name} />
          <AppButton
            on:click={() => onRemove(value)}
            icon={Trash}
            color="red"
          />
        </div>
      </li>
    {/each}

    <li>
      <div class="flex gap-2">
        <AppInput
          id="newItemName"
          placeholder="New item name"
          bind:value={newValue}
          on:keydown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onAdd();
            }
          }}
        />
        <AppButton
          on:click={onAdd}
          disabled={!newValueValid}
          icon={Plus}
          color="green"
        />
      </div>
    </li>
  </ul>
</fieldset>
