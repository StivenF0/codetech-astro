import type { APIRoute } from "astro";
import { posts } from "../../data/posts"

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(posts),
    { status: 200 },
  )
}