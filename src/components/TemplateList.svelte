<script lang="ts">
  import { Link } from "svelte-navigator";
  import TemplateListItem from "../components/TemplateListItem.svelte";
  import { TemplateService } from "../services/template.service";

  const templatesPromise = TemplateService.listTemplates();
</script>

<h2>Templates</h2>

<div>
  <Link to="/create-template">Create a new template</Link>
</div>

{#await templatesPromise}
  <p>...waiting</p>
{:then templates}
  <div class="wrapper">
    {#each templates as template}
      <TemplateListItem name={template.name} link={`template/${template.id}`} />
    {/each}
  </div>
{:catch error}
  <p class="error">{error.message}</p>
{/await}

<style>
  .heading-wrapper {
    text-align: start;
    margin-bottom: 1rem;
  }

  .heading {
    font-size: 2rem;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    gap: 1rem;
  }

  .error {
    color: red;
  }
</style>
