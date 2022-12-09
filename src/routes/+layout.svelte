<script lang="ts">
  import '../app.css';

  import { afterUpdate } from 'svelte';
  import Nav from '$lib/Nav.svelte';

  import 'prismjs/themes/prism-tomorrow.css';

  let fullURL: string = '';

  afterUpdate(() => {
    let tmpURL = window.location.href;
    fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/';
  });
</script>

<svelte:head>
  <link rel="canonical" href="{fullURL}" />
</svelte:head>

<Nav />

<main class="mh pb-12">
  <slot />
</main>

<style>
  main {
    min-height: calc(100vh - 428px);
  }
</style>
