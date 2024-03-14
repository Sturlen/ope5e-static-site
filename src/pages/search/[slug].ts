import type { APIRoute } from "astro"
import { getCollection, getEntry } from "astro:content"
import Fuse from "fuse.js"

export const prerender = false

const monsters = await getCollection("monsters")
const fuse = new Fuse(monsters)

export const GET: APIRoute = async ({ params, request }) => {
    const slug = params.slug

    if (!slug) return new Response("Query must not be empty", { status: 400 })

    const entries = fuse.search(slug)

    return new Response(JSON.stringify(entries, null, 4))
}
