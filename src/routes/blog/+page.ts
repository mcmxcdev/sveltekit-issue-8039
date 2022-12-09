import type { PageLoadEvent } from './$types';

export async function load({ fetch }: PageLoadEvent) {
  const blog = await fetch('/blog.json');
  const posts = await blog.json();

  return { posts };
}
