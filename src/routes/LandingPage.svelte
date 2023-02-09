<script>
  import { Button } from 'flowbite-svelte';
  import { Link, useNavigate } from 'svelte-navigator';
  import AppButton from '../components/shared/AppButton.svelte';
  import { loggedInUser } from '../store';
  import { AuthService } from '../util/auth/auth.service';

  const navigate = useNavigate();

  async function login() {
    const success = await AuthService.login();
    if (success) {
      navigate('/');
    }
  }
</script>

<section>
  <div
    class="flex flex-col items-center text-center bg-gray-900 py-10 px-3 md:px-5"
  >
    <p class="text-lg uppercase text-yellow-400">Have I got everything?</p>

    <h1 class="text-6xl font-medium max-w-xl mt-3">Stop forgetting things.</h1>

    <p class="text-xl max-w-2xl mt-5 text-gray-500">
      A tracking system that will make sure you never leave your house without
      forgetting something important.
    </p>

    <div class="mt-10">
      {#if $loggedInUser}
        <AppButton linkHref="/" color="green">Go to dashboard</AppButton>
      {:else}
        <AppButton on:click={login} color="green">Get started now</AppButton>
      {/if}
    </div>
  </div>

  <div class="max-w-6xl mx-auto p-4 md:p-10 ">
    <h2 class="text-2xl text-yellow-200 text-center">
      Have you ever asked yourself "Have I got everything?" when exiting your
      home?
    </h2>
    <h2 class="text-2xl text-yellow-300 text-center mt-2">
      Have you ever sat in your car and remembered that you forgot your wallet?
    </h2>

    <div class="mt-7 text-xl">
      <p class="mb-2">
        <strong class="font-medium">Have I got everything?</strong> is a simple app
        that helps you solve this problem in four easy steps:
      </p>

      <ol class="list-decimal ml-8">
        <li>Create a template (for example: "Gym stuff")</li>
        <li>Add items (for example: "Sneakers", "Towel")</li>
        <li>
          When you need to gather the items, activate the template and check off
          the items.
        </li>
        <li>Enjoy not asking yourself "Have I got everything?"</li>
      </ol>

      <div class="mt-10 flex justify-center">
        {#if $loggedInUser}
          <AppButton linkHref="/" color="green">Go to dashboard</AppButton>
        {:else}
          <AppButton on:click={login} color="green">Get started now</AppButton>
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/variables.scss';

  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .intro {
      .brand {
        text-transform: uppercase;
        font-size: 0.8rem;
        text-align: center;
        color: variables.$color-4;
        font-weight: 600;
        margin-bottom: 1em;
      }

      .heading {
        font-size: 4rem;
        text-align: center;
        font-weight: 600;

        max-width: 40rem;
        width: 100%;

        margin: 0 auto;

        text-align: center;
      }

      .description {
        font-size: 2rem;
        font-weight: 300;

        text-align: center;
        margin: 0 auto;
        margin-top: 1em;

        max-width: 40rem;
        width: 100%;
      }

      .btn-wrapper {
        display: flex;
        justify-content: center;
        margin: 3em 0;
      }
    }

    .question {
      font-size: 2rem;
      font-weight: 500;
    }

    .get-started-wrapper {
      margin-top: 1em;
      text-align: center;
    }

    .explanation {
      font-size: 1.5rem;
      font-weight: 300;
      margin-top: 2em;

      strong {
        font-weight: 600;
      }

      ol {
        margin-top: 1em;
        list-style-type: decimal;
        margin-left: 3rem;
      }
    }
  }
</style>
