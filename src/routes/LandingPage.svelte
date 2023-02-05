<script>
  import { Link, useNavigate } from "svelte-navigator";
  import { loggedInUser } from "../store";
  import { AuthService } from "../util/auth/auth.service";

  const navigate = useNavigate();

  async function login() {
    const success = await AuthService.login();
    if (success) {
      navigate("/");
    }
  }
</script>

<main class="wrapper">
  <h1 class="heading">Stop forgetting things.</h1>
  <p>
    Have you ever asked yourself "Have I got everything?" when exiting your
    home? Have you ever sat in your car and remembered that you forgot your
    wallet?
  </p>
  <p>
    <strong>Have I got everything?</strong> is a simple app that helps you solve
    this problem in four easy steps:
  </p>
  <ol>
    <li>Create a template (for example: "Gym stuff")</li>
    <li>Add items (for example: "Sneakers", "Towel")</li>
    <li>
      When you need to gather the items, activate the template and check off the
      items.
    </li>
    <li>Enjoy not asking yourself "Have I got everything?"</li>
  </ol>

  <div class="get-started-wrapper">
    <h2>Get started now</h2>
    {#if $loggedInUser}
      <Link to="/">Go to the dashboard</Link>
    {:else}
      <button type="button" class="link" on:click={login}
        >Log in or create an account</button
      >
    {/if}
  </div>
</main>

<style>
  .heading {
    text-align: center;
  }

  .wrapper {
    padding-top: 100px;
  }

  .get-started-wrapper {
    margin-top: 2rem;
    text-align: center;
  }
</style>
