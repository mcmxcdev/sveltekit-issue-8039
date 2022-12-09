import { json } from '@sveltejs/kit';
import posts from '$lib/posts';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
  return json(posts);
};
