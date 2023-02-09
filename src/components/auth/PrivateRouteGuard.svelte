<script>
  import { useNavigate } from 'svelte-navigator';
  import { loggedInUser } from '../../store';

  const navigate = useNavigate();

  $: if ($loggedInUser === null) {
    navigate('/about', {
      replace: true
    });
  }
</script>

{#if $loggedInUser}
  <slot />
{/if}
