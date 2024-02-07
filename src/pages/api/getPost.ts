import type { APIRoute } from "astro";
import { posts } from "../../data/posts";

export const GET: APIRoute = ({ url }) => {
  const id = url.searchParams.get("id");
  if (!id || isNaN(Number(id))) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const post = posts.find((el) => el.id === parseInt(id));

  return new Response(JSON.stringify(post), { status: 200 });
};
