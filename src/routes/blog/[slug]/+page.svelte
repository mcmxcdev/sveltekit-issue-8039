<script lang="ts">
  import { page } from '$app/stores';

  export let data: { posts };
  let { posts } = data;

  $: post = posts.find((post) => post.slug === $page.params.slug);
</script>

<h1>Blog details page</h1>

{JSON.stringify(post)}
