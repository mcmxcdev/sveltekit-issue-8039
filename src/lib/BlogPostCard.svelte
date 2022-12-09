<script lang="ts">
  import InfoTags from './InfoTags.svelte';
  import type { Post } from '../models/post';

  export let post: Post;
</script>

<div class="card">
  <div class="px-6 py-8">
    <div class="my-3 text-xl font-bold">
      <a href="/blog/{post.slug}" class="link-inherit">{post.title}</a>
    </div>

    <div class="my-3">
      <InfoTags post="{post}" />
    </div>

    {#if post.excerpt}
      <p class="mt-3 mb-12">
        {post.excerpt.length > 100
          ? `${post.excerpt.slice(0, 100)}...`
          : post.excerpt}
      </p>
    {/if}
  </div>
  <div class="absolute bottom-0 right-0 pt-4 pl-6 text-right">
    <a
      aria-label="{post.slug}"
      href="/blog/{post.slug}"
      class="btn-primary inline-block rounded-br"
    >
      Read the article
    </a>
  </div>
</div>
