<script>
  import { Link } from "svelte-navigator";
  import auth from "../util/auth";

  async function logout() {
    await auth.logout();
  }
</script>

<header class="header">
  <p class="logo">Have I got everything?</p>
  <nav class="nav">
    <Link to="/">Dashboard</Link>
    <Link to="/about">About</Link>
    <button type="button" on:click={logout}>Logout</button>
  </nav>
</header>

<style>
  .header {
    width: 100%;
    padding: 1.5rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .logo {
    margin: 1rem 0;
  }

  .nav {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
</style>
