<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import AppInput from "../components/AppInput.svelte";
  import ListInput from "../components/ListInput.svelte";
  import type { ListInputModels } from "../models/list-input.models";

  export let mode: "create" | "edit" = "create";
  export let name: string = "";
  export let items: ListInputModels.Item[] = [];

  $: isValid = name.trim().length > 0 && items.length > 0;

  const dispatch = createEventDispatcher();

  async function handleSubmit() {
    if (!isValid) {
      return;
    }

    dispatch("submit");
  }

  const textMap: Record<typeof mode, { heading: string; button: string }> = {
    create: {
      heading: "Create a template",
      button: "Create",
    },
    edit: {
      heading: "Edit a template",
      button: "Edit",
    },
  };
</script>

<h1 class="heading">{textMap[mode].heading}</h1>

<form class="form" on:submit|preventDefault={handleSubmit}>
  <AppInput label="Name" bind:value={name} />

  <ListInput bind:values={items} />

  <button type="submit" disabled={!isValid}>{textMap[mode].button}</button>
</form>

<style>
  .heading {
    text-align: start;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    margin: 0 auto;
    gap: 1rem;
  }
</style>
