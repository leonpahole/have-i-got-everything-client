<script lang="ts">
  import { Link, useNavigate } from "svelte-navigator";
  import { ActiveListService } from "../../util/activeLists/active-list.service";
  import type { TemplateModels } from "../../util/templates/template.models";
  import { TemplateService } from "../../util/templates/template.service";

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
