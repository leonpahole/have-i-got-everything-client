<script lang="ts">
  export let label: string = "";
  export let value;
</script>

<label>
  {label}
  <input bind:value />
</label>

<style>
  label {
    text-align: start;
  }

  input {
    width: 100%;
    display: block;
    padding: 0.5rem;
    margin-top: 6px;
  }
</style>
