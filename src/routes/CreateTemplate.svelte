<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import TemplateEditor from '../components/templates/TemplateEditor.svelte';
  import type { SharedModels } from '../util/shared/shared.models';
  import { TemplateService } from '../util/templates/template.service';

  const navigate = useNavigate();

  let name: string = '';
  let description: string = '';
  let items: SharedModels.ListInputItem[] = [];

  let isSubmitting: boolean = false;
  let error: string | null = null;

  async function handleCreate() {
    try {
      isSubmitting = true;
      error = null;
      const template = await TemplateService.createTemplate(
        name,
        description,
        items
      );
      navigate(`/template/${template.id}`);
    } catch (e) {
      error = e?.message || 'Unknown error';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<TemplateEditor
  bind:name
  bind:description
  bind:items
  on:submit={handleCreate}
  {isSubmitting}
  {error}
/>
