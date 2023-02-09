<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import { ActiveListService } from '../../util/activeLists/active-list.service';
  import type { TemplateModels } from '../../util/templates/template.models';
  import { TemplateService } from '../../util/templates/template.service';
  import AppButton from '../shared/AppButton.svelte';
  import { Pencil, Trash, Play } from 'svelte-heros-v2';
  import { Alert, Button, Modal } from 'flowbite-svelte';

  export let template: TemplateModels.Template;

  const navigate = useNavigate();

  let isCreatingFromTemplate = false;
  let isDeleting = false;
  let error: string | null = null;

  async function createFromTemplate() {
    try {
      error = null;
      isCreatingFromTemplate = true;
      const { id } = await ActiveListService.createFromTemplate(template.id);
      navigate(`/list/${id}`);
    } catch (e) {
      error = e?.message || 'Unknown error';
    } finally {
      isCreatingFromTemplate = false;
    }
  }

  async function onDelete() {
    try {
      isDeleting = true;
      error = null;
      await TemplateService.deleteTemplate(template.id);
      navigate('/');
    } catch (e) {
      error = e?.message || 'Unknown error';
      alert(`An error has occured while deleting: ${e?.message}`);
    } finally {
      isDeleting = false;
    }
  }

  let deleteModalOpen: boolean = false;
</script>

<div class="flex gap-3 justify-between flex-wrap">
  <div class="flex gap-3 items-center">
    <h1 class="text-4xl font-medium">{template.name}</h1>
    <AppButton
      disabled={isCreatingFromTemplate}
      on:click={createFromTemplate}
      icon={Play}
    >
      Apply template
    </AppButton>
  </div>

  <div class="flex gap-2 items-stretch">
    <AppButton
      linkHref={`/template/${template.id}/update`}
      color="alternative"
      icon={Pencil}
    >
      Edit
    </AppButton>

    <AppButton
      color="red"
      disabled={isDeleting}
      icon={Trash}
      on:click={() => (deleteModalOpen = true)}>Delete</AppButton
    >
  </div>
</div>

{#if error != null}
  <div class="mt-6">
    <Alert color="red">
      <span class="font-medium">An error has occured: {error}!</span> Please try
      again.
    </Alert>
  </div>
{/if}

{#if template.description}
  <p class="my-3 font-normal text-gray-400 whitespace-pre-line">
    {template.description}
  </p>
{/if}

<div class="bg-gray-700 text-gray-700 my-8 h-px w-full" />

<h3 class="text-2xl text-white mb-3">Items</h3>

<ul class="text-xl list-disc ml-6 text-gray-400">
  {#each template.items as item (item)}
    <li>{item.name}</li>
  {/each}
</ul>

<Modal bind:open={deleteModalOpen} size="xs" autoclose>
  <div class="text-center">
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
      Are you sure you want to delete this template?
    </h3>
    <Button color="red" class="mr-2" on:click={onDelete}>Yes</Button>
    <Button color="alternative">Cancel</Button>
  </div>
</Modal>
