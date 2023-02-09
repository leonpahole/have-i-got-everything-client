<script>
  import {
    Avatar,
    Button,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavBrand,
    NavUl
  } from 'flowbite-svelte';
  import { Link } from 'svelte-navigator';
  import { loggedInUser } from '../../store';
  import { AuthService } from '../../util/auth/auth.service';

  function logout() {
    AuthService.logout();
  }
</script>

<Navbar
  color="dark"
  navClass="!bg-transparent !text-white !px-2 sm:!px-4 !py-2.5 !w-full"
  navDivClass="mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center container"
>
  <NavBrand href="/">
    <Link
      to="/"
      class="self-center whitespace-nowrap text-xl font-semibold text-white"
    >
      Have I got everything?
    </Link>
  </NavBrand>
  <div class="flex flex-col sm:flex-row items-center sm:gap-5">
    <NavUl
      divClass="block w-auto"
      ulClass="flex p-4 mt-4 flex-row space-x-8 mt-0 text-sm font-medium"
    >
      <Link to="/" class="block p-0 m-0 rounded border-0 text-white">
        Dashboard
      </Link>
      <Link to="/about" class="block p-0 m-0 rounded border-0 text-white">
        About
      </Link>
    </NavUl>
    <Avatar id="avatar-menu" src={$loggedInUser.picture} />
  </div>
  <Dropdown triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block truncate text-sm font-medium">
        {$loggedInUser.name}
      </span>
    </DropdownHeader>
    <DropdownDivider />
    <DropdownItem>
      <Button
        color="alternative"
        class="w-full border-none bg-transparent"
        on:click={logout}>Sign out</Button
      >
    </DropdownItem>
  </Dropdown>
</Navbar>
