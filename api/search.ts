import type { APIRoute } from "astro"
import { getCollection } from "astro:content"
import Fuse from "fuse.js"

export const prerender = false

const monsters = await getCollection("monsters")
const fuse = new Fuse(monsters)

export const GET: APIRoute = async ({ params, request }) => {
    const url = new URL(request.url)
    const name = url.searchParams.get("name") ?? "Creature"

    if (!name) return new Response("Query must not be empty", { status: 400 })

    const entries = fuse.search(name)

    return new Response(JSON.stringify(entries, null, 4))
}
