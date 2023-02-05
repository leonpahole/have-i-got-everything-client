<script lang="ts">
  import Template from "../components/Template.svelte";
  import { TemplateService } from "../services/template.service";

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
