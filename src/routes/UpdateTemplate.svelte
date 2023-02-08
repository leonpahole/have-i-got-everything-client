<script lang="ts">
  import { onMount } from 'svelte';
  import { useNavigate } from 'svelte-navigator';
  import AppCenteredSpinner from '../components/shared/AppCenteredSpinner.svelte';
  import TemplateEditor from '../components/templates/TemplateEditor.svelte';
  import type { TemplateModels } from '../util/templates/template.models';
  import { TemplateService } from '../util/templates/template.service';

  const navigate = useNavigate();

  export let id: string;

  let isSubmitting: boolean = false;
  let error: string | null = null;

  let template: TemplateModels.Template | undefined = undefined;
  onMount(async () => {
    template = await TemplateService.getTemplateDetail(Number(id));
  });

  async function handleUpdate() {
    try {
      isSubmitting = true;
      error = null;
      await TemplateService.updateTemplate(
        template.id,
        template.description,
        template.name,
        template.items
      );
      navigate(`/template/${template.id}`);
    } catch (e) {
      error = e?.message ?? 'Unknown error';
    } finally {
      isSubmitting = false;
    }
  }
</script>

{#if template == null}
  <AppCenteredSpinner />
{:else}
  <TemplateEditor
    bind:name={template.name}
    bind:description={template.description}
    bind:items={template.items}
    on:submit={handleUpdate}
    mode="edit"
    {isSubmitting}
    {error}
  />
{/if}
