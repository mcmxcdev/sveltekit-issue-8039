import type { RequestEvent } from './$types';
import posts from '$lib/posts';

export function GET({ params }: RequestEvent) {
  const selectedPost = posts.find((post) => post.slug === params.slug);

  if (selectedPost) {
    return {
      selectedPost,
    };
  }

  return {
    status: 404,
  };
}
