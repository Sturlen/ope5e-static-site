export const prerender = false

export const config = {
    runtime: "edge",
}

export default async (request: Request) => {
    const url = new URL(request.url)
    const name = url.searchParams.get("name") ?? "Creature"

    if (!name) return new Response("Query must not be empty", { status: 400 })
    const monster_url = "https://" + url.host + "/monsters.json"
    console.log("monster_url", monster_url)
    const entries: Promise<any[]> = await (await fetch(monster_url)).json()

    console.log("ent", entries)

    return new Response(JSON.stringify(entries, null, 4))
}
