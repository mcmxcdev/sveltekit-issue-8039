<script lang="ts">
  import type { Post } from '../models/post';

  export let previousArticle: Post;
  export let nextArticle: Post;
</script>

<div class="-m-2 mb-10 flex flex-wrap">
  {#if previousArticle}
    <div class="w-full p-2 md:w-1/2">
      <div class="card h-full p-5">
        <small class="block text-sm text-gray-600">
          <em>Previous article</em>
        </small>
        <b>
          <a
            href="/blog/{previousArticle.slug}"
            class="link-inherit text-xl no-underline hover:underline"
            style="font-weight: 700;"
          >
            {previousArticle.title}
          </a>
        </b>
      </div>
    </div>
  {/if}
  {#if nextArticle}
    <div class="w-full p-2 md:w-1/2">
      <div class="card h-full p-5">
        <small class="block text-sm text-gray-600">
          <em>Next article</em>
        </small>
        <b>
          <a
            href="/blog/{nextArticle.slug}"
            class="link-inherit text-xl no-underline hover:underline"
            style="font-weight: 700;"
          >
            {nextArticle.title}
          </a>
        </b>
      </div>
    </div>
  {/if}
</div>
