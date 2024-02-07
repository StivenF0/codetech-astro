import type { APIRoute } from "astro";


export const GET: APIRoute = ({url}) => {
  const id = url.searchParams.get("id");
  if (!id) return new Response(null, {
    status: 404,
    statusText: 'Not found'
  });

  

  return new Response()
}