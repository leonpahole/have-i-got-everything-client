<script lang="ts">
  import { useNavigate } from "svelte-navigator";
  import TemplateEditor from "../components/TemplateEditor.svelte";
  import type { ListInputModels } from "../models/list-input.models";
  import { TemplateService } from "../services/template.service";

  const navigate = useNavigate();

  let name: string = "";
  let items: ListInputModels.Item[] = [];

  async function handleCreate() {
    const template = await TemplateService.createTemplate(name, items);
    navigate(`/template/${template.id}`);
  }
</script>

<TemplateEditor bind:name bind:items on:submit={handleCreate} />
