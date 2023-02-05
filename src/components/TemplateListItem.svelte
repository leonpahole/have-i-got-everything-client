<script lang="ts">
  import type { TemplateModels } from "../models/template.models";
  import { Link } from "svelte-navigator";

  export let name: string;
  export let link: string;
</script>

<article class="card">
  <h2>{name}</h2>
  <Link to={link}>View details</Link>
</article>

<style>
  .card {
    border: 1px solid white;
    border-radius: 20px;
    padding: 1rem 2rem;
  }
</style>
