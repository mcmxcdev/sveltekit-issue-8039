import type { PageLoadEvent } from './$types';

export async function load({ fetch }: PageLoadEvent) {
  const res = await fetch('/blog.json');
  const posts = await res.json();

  return { posts };
}
