export const prerender = false

export const config = {
    runtime: "edge",
}

export default async (request: Request) => {
    const url = new URL(request.url)
    const name = url.searchParams.get("name") ?? "Creature"

    if (!name) return new Response("Query must not be empty", { status: 400 })
    const monsters = []

    const entries = monsters

    return new Response(JSON.stringify(entries, null, 4))
}
