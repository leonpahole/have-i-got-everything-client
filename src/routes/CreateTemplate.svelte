<script lang="ts">
  import { useNavigate } from "svelte-navigator";
  import TemplateEditor from "../components/templates/TemplateEditor.svelte";
  import type { SharedModels } from "../util/shared/shared.models";
  import { TemplateService } from "../util/templates/template.service";

  const navigate = useNavigate();

  let name: string = "";
  let items: SharedModels.ListInputItem[] = [];

  async function handleCreate() {
    const template = await TemplateService.createTemplate(name, items);
    navigate(`/template/${template.id}`);
  }
</script>

<TemplateEditor bind:name bind:items on:submit={handleCreate} />
