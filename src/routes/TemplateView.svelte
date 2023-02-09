<script lang="ts">
  import { onMount } from 'svelte';
  import AppCenteredSpinner from '../components/shared/AppCenteredSpinner.svelte';
  import AppErrorMessage from '../components/shared/AppErrorMessage.svelte';
  import Template from '../components/templates/Template.svelte';
  import { TemplateService } from '../util/templates/template.service';

  export let id: string;

  let templatePromise;
  function tryFetching() {
    templatePromise = TemplateService.getTemplateDetail(Number(id));
  }

  onMount(() => {
    tryFetching();
  });
</script>

{#if templatePromise}
  {#await templatePromise}
    <AppCenteredSpinner />
  {:then template}
    <div class="wrapper">
      <Template {template} />
    </div>
  {:catch error}
    <AppErrorMessage message={error.message} on:tryagain={tryFetching} />
  {/await}
{/if}
