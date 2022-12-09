<script lang="ts">
  import BlogPostTag from './BlogPostTag.svelte';
  import ShareButtons from './ShareButtons.svelte';
  import InfoTags from './InfoTags.svelte';
  import type { Post } from '../models/post';

  export let post: Post;
</script>

<section class="applause-gradient">
  <div class="mh-container container">
    <div
      class="flex items-center justify-between rounded bg-white p-6 text-center shadow-xl
      sm:flex-row"
    >
      <div class="w-full">
        <h1>{post.title}</h1>

        {#if post.guestAuthor}
          <p>By {post.guestAuthor}</p>
        {/if}

        <InfoTags post="{post}" />

        <BlogPostTag tags="{post.tags}" />

        <div class="my-5 flex flex-wrap justify-center">
          <ShareButtons post="{post}" />
        </div>

        {#if post.hasAffiliateLink}
          <div class="text-sm italic text-gray-700" role="alert">
            Disclosure: This article may contain affiliate links, meaning I
            receive a commission for purchases made through these links, at no
            cost to you.
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
