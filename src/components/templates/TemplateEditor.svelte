<script lang="ts">
  import { Alert } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';
  import { SharedModels } from '../../util/shared/shared.models';
  import AppButton from '../shared/AppButton.svelte';
  import AppInput from '../shared/AppInput.svelte';
  import AppTextarea from '../shared/AppTextarea.svelte';
  import ListInput from '../shared/ListInput.svelte';

  export let mode: 'create' | 'edit' = 'create';
  export let name: string = '';
  export let description: string = '';
  export let items: SharedModels.ListInputItem[] = [];
  export let error: string | null = null;
  export let isSubmitting: boolean;

  $: isValid =
    name.trim().length > 0 &&
    items.length > 0 &&
    items.every(SharedModels.isListInputItemValid);

  const dispatch = createEventDispatcher();

  function handleSubmit() {
    if (!isValid || isSubmitting) {
      return;
    }

    dispatch('submit');
  }

  const textMap: Record<typeof mode, { heading: string; button: string }> = {
    create: {
      heading: 'Create a template',
      button: 'Create'
    },
    edit: {
      heading: 'Edit a template',
      button: 'Edit'
    }
  };
</script>

<h2 class="text-4xl font-medium">{textMap[mode].heading}</h2>

<form class="mt-5" on:submit|preventDefault={handleSubmit}>
  <AppInput
    id="name"
    label="Name"
    placeholder="Template name"
    className="mb-3"
    bind:value={name}
  />

  <AppTextarea
    id="name"
    label="Description"
    placeholder="Template description..."
    bind:value={description}
  />

  <div class="bg-gray-700 text-gray-700 my-4 h-px w-full" />

  <ListInput label="Items" bind:values={items} />

  <AppButton
    type="submit"
    disabled={isSubmitting || !isValid}
    className="mt-8 w-full"
  >
    {textMap[mode].button}
  </AppButton>

  {#if error != null}
    <div class="mt-6">
      <Alert color="red">
        <span class="font-medium">An error has occured: {error}!</span> Please try
        again.
      </Alert>
    </div>
  {/if}
</form>
