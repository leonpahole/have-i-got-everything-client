<script lang="ts">
  import type { TemplateModels } from "../models/template.models";
  import { Link, useNavigate } from "svelte-navigator";
  import { ActiveListService } from "../services/active-list.service";
  import { TemplateService } from "../services/template.service";

  export let template: TemplateModels.Template;

  const navigate = useNavigate();

  async function createFromTemplate() {
    const { id } = await ActiveListService.createFromTemplate(template.id);
    navigate(`/list/${id}`);
  }

  async function onDelete() {
    await TemplateService.deleteTemplate(template.id);
  }
</script>

<h1>{template.name}</h1>

<Link to={`/template/${template.id}/update`}>Edit</Link>

<button on:click={createFromTemplate}>Create</button>

<button on:click={onDelete}>Delete</button>

<ul>
  {#each template.items as item (item)}
    <li>{item.name}</li>
  {/each}
</ul>
