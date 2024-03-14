import { getCollection } from "astro:content"

export const prerender = false

export default async (request: Request) => {
    const url = new URL(request.url)
    const name = url.searchParams.get("name") ?? "Creature"

    if (!name) return new Response("Query must not be empty", { status: 400 })
    const monsters = await getCollection("monsters")

    const entries = monsters

    return new Response(JSON.stringify(entries, null, 4))
}
