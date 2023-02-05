<script lang="ts">
  import type { Task } from "../store";
  import { tasks } from "../store";

  export let task: Task;
  let isChecked;

  function taskDone() {
    let updatedTasks = $tasks.map((currentTask) => {
      if (currentTask.id === task.id) {
        currentTask.completed = isChecked;
        return currentTask;
      }
      return currentTask;
    });

    tasks.set(updatedTasks);
  }
</script>

<main>
  <li class="list-group-item">
    <input
      type="checkbox"
      class="form-check-input"
      id="exampleCheck1"
      bind:checked={isChecked}
      on:change={(e) => taskDone()}
    />
    <span class:completed={task.completed}>{task.description}</span>
  </li>
</main>

<style>
  .completed {
    color: red;
    text-decoration: line-through;
  }
</style>
