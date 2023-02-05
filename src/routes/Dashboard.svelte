<script lang="ts">
  import ActiveListsList from "../components/ActiveListsList.svelte";
  import TemplateList from "../components/TemplateList.svelte";
</script>

<div class="heading-wrapper">
  <h1 class="heading">Dashboard</h1>
</div>

<TemplateList />

<hr class="separator" />

<ActiveListsList />

<style>
  .separator {
    margin: 16px 0;
  }
</style>
