<script lang="ts">
  import { onMount } from "svelte";
  import { useNavigate } from "svelte-navigator";
  import TemplateEditor from "../components/TemplateEditor.svelte";
  import type { TemplateModels } from "../models/template.models";
  import { TemplateService } from "../services/template.service";

  const navigate = useNavigate();

  export let id: string;

  let template: TemplateModels.Template | undefined = undefined;
  onMount(async () => {
    template = await TemplateService.getTemplateDetail(Number(id));
  });

  async function handleUpdate() {
    await TemplateService.updateTemplate(
      template.id,
      template.name,
      template.items
    );
    navigate(`/template/${template.id}`);
  }
</script>

{#if template == null}
  <p>Loading...</p>
{:else}
  <TemplateEditor
    bind:name={template.name}
    bind:items={template.items}
    on:submit={handleUpdate}
    mode="edit"
  />
{/if}
