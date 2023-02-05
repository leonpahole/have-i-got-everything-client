<script lang="ts">
  import { TemplateService } from "../util/templates/template.service";
  import Template from "../components/templates/Template.svelte";

  export let id: string;
  const templatePromise = TemplateService.getTemplateDetail(Number(id));
</script>

{#await templatePromise}
  <p>...waiting</p>
{:then template}
  <div class="wrapper">
    <Template {template} />
  </div>
{:catch error}
  <p class="error">{error.message}</p>
{/await}

<style>
  .error {
    color: red;
  }
</style>
