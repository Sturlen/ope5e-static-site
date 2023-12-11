import type { APIRoute } from "astro"
import { getCollection, getEntry } from "astro:content"

export const GET: APIRoute = async ({ params, request }) => {
    const slug = params.slug ?? "null"
    const entry = await getEntry("monsters", slug)
    if (!entry) {
        return new Response("Not found", { status: 404 })
    }
    return new Response(JSON.stringify(entry.data, null, 4))
}

export async function getStaticPaths() {
    const monsterEntries = await getCollection("monsters")

    return monsterEntries.map((monster) => ({
        params: { slug: monster.id },
    }))
}
