<script lang="ts">
  import '../app.css';

  import Nav from '$lib/Nav.svelte';
</script>

<Nav />

<main class="mh pb-12">
  <slot />
</main>

<style>
  main {
    min-height: calc(100vh - 428px);
  }
</style>
