<script lang="ts">
  import Icon from 'svelte-awesome';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import ClickOutside from 'svelte-click-outside';

  let open = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>

<header class="header-box-shadow fixed top-0 w-full bg-white">
  <div
    class="container mx-auto flex flex-wrap items-center justify-between bg-white p-3"
  >
    <div class="flex">
      <a
        href="/"
        class="nav-link mt-0 text-xl font-semibold tracking-tight md:inline-block"
      >
        Logo
      </a>
    </div>
    <div class="ml-auto md:hidden">
      <ClickOutside on:clickoutside="{() => (open = false)}">
        <button
          class="flex items-center border border-gray-400 px-3 py-2 text-teal-700 hover:border-gray-500 hover:text-teal-900"
          aria-label="Hamburger menu"
          on:click="{toggleHamburgerMenu}"
        >
          <Icon data="{faBars}" />
        </button>
      </ClickOutside>
    </div>
    <nav
      aria-label="Header navigation"
      class:hidden="{!open}"
      class="ml-auto w-full md:flex md:w-auto"
    >
      <a href="/about" class="nav-link md:mt-0 md:inline-block"> About </a>
      <a href="/blog" class="nav-link md:mt-0 md:inline-block"> Blog </a>
    </nav>
  </div>
</header>

<style>
  .header-box-shadow {
    box-shadow: 0 -0.2rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  header {
    z-index: 1;
  }
</style>
